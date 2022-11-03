import { Text, View } from "react-native"
import React from "react"
import { R } from "@github/res"
import { SearchEmptyStyles } from "./search.styles"

const SearchEmptyComponent = (props: { query: string }) => {
  return (
    <View style={SearchEmptyStyles.container}>
      {props.query ? (
        //if QUERY has text (means this is a search result with empty result)
        //No Result Found
        <>
          <Text style={SearchEmptyStyles.title}>{R.string.search.noResultTitle}</Text>
          <Text style={SearchEmptyStyles.content}>{R.string.search.noResultContent}</Text>
        </>
      ) : (
        //if QUERY is empty (means there is no search yet)
        <>
          <Text style={SearchEmptyStyles.title}>{R.string.search.noSearchTitle}</Text>
          <Text style={SearchEmptyStyles.content}>{R.string.search.noSearchContent}</Text>
        </>
      )}
    </View>
  )
}

export default SearchEmptyComponent
