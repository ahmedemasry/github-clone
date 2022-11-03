import React, { useEffect, useState } from "react"
import { Platform, TextInput, FlatList, View, KeyboardAvoidingView, Keyboard } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import {
  searchUsersEndpoint,
  IUserSearch,
} from "@github/services/networking/endpoints/login/search"
import { ActivityIndicator, Button, FitImage, Screen } from "@github-shared"
import { API, DEFAULT_API_CONFIG } from "@github/services"
import { R } from "@github/res"
import SearchEmptyComponent from "./search-empty"
import { SearchStyles } from "./search.styles"
import SearchSuggestion from "./search-suggestion"
import SearchItem from "./search-item"

const SearchScreen = () => {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<IUserSearch[]>([])
  const [isLoading, setLoading] = useState(false)
  const [isTyping, setTyping] = useState(false)
  const [pageNumber, setPageNumber] = useState(2)
  const [numberOfPages, setNumberOfPages] = useState(2)

  useEffect(() => {
    setTyping(true)
  }, [query])

  const search = async (searchTerm: string, pageNum: number = 1) => {
    const isFirstPage: boolean = pageNum === 1
    if (isFirstPage) {
      //If the function is called from a search Button
      setLoading(true)
      setResult([]) //Reset
      setTyping(false)
      setPageNumber(2) //Reset
      Keyboard.dismiss()
    }
    let newResult: IUserSearch[] = []
    if (query.trim().length) {
      //If query has non-space text
      API.request(searchUsersEndpoint(query.trim(), searchTerm, pageNum), {})
        .then((res) => {
          if (res.ok) {
            if (isFirstPage) {
              setNumberOfPages(Math.ceil(res.data.totalCount / DEFAULT_API_CONFIG.itemsPerPage))
            }
            newResult = res.data.items ?? []
            setResult((prev) => [...prev, ...newResult])
          }
        })
        .catch(() => {
          setResult([])
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <Screen preset="fixedStack">
      <SafeAreaView style={SearchStyles.screen}>
        {/*App Bar Section */}
        <View style={SearchStyles.appBar}>
          <TextInput
            clearButtonMode="while-editing"
            style={SearchStyles.input}
            onChangeText={setQuery}
            onFocus={() => setTyping(true)}
            value={query}
            placeholder={R.string.search.placeholder}
            placeholderTextColor={R.color.textInputPlaceholder}
          />
          {Platform.OS === "android" && query ? (
            <Button onPress={() => setQuery("")} style={SearchStyles.clearIcon}>
              <FitImage source={R.image.cancel} />
            </Button>
          ) : null}
        </View>

        {/*Result Part Section */}
        {isTyping && query && !isLoading ? (
          <SearchSuggestion query={query} search={search} />
        ) : (
          <View />
        )}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={SearchStyles.resultContainer}>
          {result.length > 0 && !isTyping ? (
            // If there are RESULT items && the user is not typing
            <FlatList
              data={result}
              keyExtractor={(_item, index) => {
                return index.toString()
              }}
              renderItem={({ item }) => <SearchItem item={item} />}
              onEndReached={() => {
                if (pageNumber <= numberOfPages) {
                  search(query, pageNumber)
                  setPageNumber(pageNumber + 1)
                }
              }}
            />
          ) : query ? (
            //If QUERY has Text
            isLoading ? (
              //If LOADING
              <ActivityIndicator size="large" />
            ) : isTyping ? null : (
              //If NO RESULT Found
              <SearchEmptyComponent query={query} />
            )
          ) : (
            //If QUERY is Empty
            <SearchEmptyComponent query={query} />
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Screen>
  )
}

export default SearchScreen
