import {StyleSheet, Text, TextStyle} from 'react-native';
type TextProps = {
  children: string;
  style?: TextStyle;
  fontFamily?:
    | 'Almarai-Bold'
    | 'Almarai-ExtraBold'
    | 'Almarai-Light'
    | 'Almarai-Regular';
};

const TextComponent = ({
  children,
  style,
  fontFamily = 'Almarai-Regular',
}: TextProps) => {
  const styles = useStyles(fontFamily);
  return <Text style={[styles.Text, style]}>{children}</Text>;
};

export {TextComponent as Text};
const useStyles = (fontFamily: string) => {
  const styles = StyleSheet.create({
    Text: {
      color: '#333333',
      fontSize: 14,
      fontFamily: fontFamily,
    },
  });
  return styles;
};
