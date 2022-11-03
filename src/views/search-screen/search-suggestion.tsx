import React from "react"
import { View } from "react-native"

import { Button, FitImage, Text } from "@github-shared"
import { R } from "@github/res"
import { SuggestionStyles } from "./search.styles"

const SearchByButton = (props: {
  iconSource: number
  text: string
  query: string
  search: (searchTerm: string) => Promise<void>
  searchType: string
}) => {
  return (
    <Button onPress={() => props.search(props.searchType)}>
      <View style={SuggestionStyles.searchByButton}>
        <FitImage source={props.iconSource} style={SuggestionStyles.icon} />
        <Text>{`${props.text} "${props.query}"`}</Text>
      </View>
    </Button>
  )
}

const SearchSuggestion = (props: {
  query: string
  search: (searchType: string) => Promise<void>
}) => {
  return (
    <View>
      {/* User Search Button */}
      <SearchByButton
        iconSource={R.image.people}
        text={R.string.search.byUsers}
        query={props.query}
        search={props.search}
        searchType={R.string.search.searchUsersType}
      />
      {/* Organization Search Button */}
      <SearchByButton
        iconSource={R.image.organization}
        text={R.string.search.byOrganizations}
        query={props.query}
        search={props.search}
        searchType={R.string.search.searchOrganizationsType}
      />
    </View>
  )
}

export default SearchSuggestion
