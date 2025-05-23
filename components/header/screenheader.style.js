import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 10 / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 10 / 1.25,
  }),
});

export default styles;
