import { StyleSheet } from "react-native"
import { R } from "@github/res"

export const SearchStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: R.spacing.smaller,
  },
  appBar: {
    flexDirection: "row",
    padding: R.spacing.medium,
    backgroundColor: R.color.secondaryRipple,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderBottomWidth: R.spacing.two,
    borderColor: R.color.textInputPlaceholder,
    marginHorizontal: R.spacing.large,
    color: R.color.text,
    justifyContent: "space-around",
  },
  clearIcon: {
    height: R.spacing.huge,
    width: R.spacing.huge,
    borderRadius: R.spacing.massive,
    backgroundColor: R.color.background,
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

export const SearchItemStyles = StyleSheet.create({
  itemButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: R.spacing.hundredPercent,
    padding: R.spacing.smaller,
    alignItems: "stretch",
    borderBottomColor: R.color.secondaryRipple,
    borderBottomWidth: R.spacing.one,
  },
  imageContainer: {
    height: R.spacing.giant,
  },
  infoContainer: {
    flexDirection: "column",
  },
  image: {
    marginRight: R.spacing.small,
    height: R.spacing.giant,
    width: R.spacing.giant,
    borderRadius: R.spacing.giant,
  },
  title: {
    padding: R.spacing.smaller,
    fontSize: R.spacing.large,
  },
  subtitle: {},
  content: {},
})

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

export const SuggestionStyles = StyleSheet.create({
  searchByButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: R.spacing.hundredPercent,
    padding: R.spacing.smaller,
    alignItems: "center",
    backgroundColor: R.color.secondaryRipple,
  },
  icon: {
    marginRight: R.spacing.small,
    height: R.spacing.giant,
    width: R.spacing.giant,
  },
})
