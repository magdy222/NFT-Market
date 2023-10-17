import { PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale();
export const SIZES = {
  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};
export const COLORS = {
  bg: "#400082",
  cardBg: "#E8F0FE",
  second: "#4F46E5",
  white: "#FFF",
  black: "#000",
  gray: "#ddd",
  lavendar:"#E6E6FA"
};
export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
}; 