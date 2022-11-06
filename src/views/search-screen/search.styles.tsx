import { StyleSheet, View } from "react-native"
import styled from 'styled-components'
import { R } from "@github/res"
import { TextInput } from "react-native-gesture-handler"
import { Button, FitImage } from "@github-shared"



// Search Screen Styling

export const StyledAppBar = styled(View)`
  flexDirection: row;
  padding: ${R.spacing.medium}px;
  backgroundColor:${R.color.secondaryRipple};
  alignItems: center;
`
export const StyledTextInput = styled(TextInput)`
  flex: 1;
  borderBottomWidth: ${R.spacing.two}px;
  borderColor: ${R.color.textInputPlaceholder};
  marginHorizontal: ${R.spacing.large}px;
  color: ${R.color.text};
  justifyContent: space-around;
`

export const StyledClearButton = styled(Button)`
  height: ${R.spacing.huge}px;
  width: ${R.spacing.huge}px;
  borderRadius: ${R.spacing.massive}px;
  backgroundColor: ${R.color.background};
`

export const SearchStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: R.spacing.smaller,
  },

  resultContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    alignSelf: "stretch",
    marginHorizontal: R.spacing.small,
    marginVertical: R.spacing.small,
  },
})



// Search Item Styling

export const ItemButton = styled(Button)`
  flexDirection: row;
  justifyContent: flex-start;
  width: ${R.spacing.hundredPercent};
  padding: ${R.spacing.smaller}px;
  alignItems: stretch;
  borderBottomColor: ${R.color.secondaryRipple};
  borderBottomWidth: ${R.spacing.one}px;
`

export const StyledImageAvatar = styled(FitImage)`
  marginRight: ${R.spacing.small}px;
  height: ${R.spacing.giant}px;
  width: ${R.spacing.giant}px;
  borderRadius: ${R.spacing.giant}px;
`
export const SearchItemStyles = StyleSheet.create({
  imageContainer: {
    height: R.spacing.giant,
  },
  infoContainer: {
    flexDirection: "column",
  },
  title: {
    padding: R.spacing.smaller,
    fontSize: R.spacing.large,
  },
  subtitle: {},
  content: {},
})



// Search Empty Styling

export const SearchEmptyStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    color: R.color.text,
    padding: R.spacing.small,
    alignSelf: "stretch",
    alignItems: "center",
    alignContent: "space-between",
  },
  title: {
    color: R.color.text,
    fontSize: R.fontSize.huge,
    fontWeight: "bold",
  },
  content: {
    margin: R.spacing.small,
    textAlign: "center",
    color: R.color.textInputPlaceholder,
    fontSize: R.fontSize.big,
  },
})



// Search Suggestions Styling

export const StyledSearchByView = styled(View)`
  flexDirection: row;
  justifyContent: flex-start;
  width: ${R.spacing.hundredPercent};
  padding: ${R.spacing.smaller}px;
  alignItems: center;
  backgroundColor: ${R.color.secondaryRipple};
`

export const StyledSearchByIcon = styled(FitImage)`
  marginRight: ${R.spacing.small}px;
  height: ${R.spacing.giant}px;
  width: ${R.spacing.giant}px;
`
