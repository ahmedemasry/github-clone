import React, { useEffect, useState } from "react"
import { Linking, View } from "react-native"
import { Text } from "@github-shared"
import {
  IUserInfo,
  IUserSearch,
  userInfoEndpoint,
} from "@github/services/networking/endpoints/login/search"
import { API } from "@github/services"
import { ItemButton, SearchItemStyles, StyledImageAvatar } from "./search.styles"

const SearchItem = (props: { item: IUserSearch }) => {
  let [data, setData] = useState<IUserInfo>()
  //Loading more info for each user (name, bio)
  //TO-DO need to make optimized
  useEffect(() => {
    API.request(userInfoEndpoint(props.item.login), {}).then((res) => {
      if (res.ok) {
        setData(res.data)
      }
    })
  }, [props.item.login])
  return (
    <ItemButton
      onPress={() => Linking.openURL(props.item.htmlUrl)}>
      {/* //Avatar Image Section */}
      <View style={SearchItemStyles.imageContainer}>
        <StyledImageAvatar source={{ uri: props.item.avatarUrl }} />
      </View>

      {/* //Text Section */}
      <View style={SearchItemStyles.infoContainer}>
        <Text style={SearchItemStyles.title}>{props.item.login}</Text>
        <Text style={SearchItemStyles.subtitle}>{data?.name}</Text>
        <Text style={SearchItemStyles.content}>{data?.bio}</Text>
      </View>
    </ItemButton>
  )
}
export default SearchItem
