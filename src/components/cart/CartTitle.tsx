import {Shop} from 'iconoir-react-native';
import {StyleSheet, View} from 'react-native';
import {Text} from '../custom/Text';
import {CheckMark} from '../common/CheckMark';

type CartTitleProps = {
  title: string;
  selected: boolean;
};
export const CartTitle = ({title, selected}: CartTitleProps) => {
  return (
    <View style={styles.TitleContainer}>
      <Shop color={'#808080'} width={15} height={15} />
      <Text style={styles.Text}>{title}</Text>
      <CheckMark selected={selected} />
    </View>
  );
};
const styles = StyleSheet.create({
  Text: {
    marginHorizontal: 5,
  },
  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '4%',
    paddingHorizontal: '4%',
    marginBottom: '3%',
  },
});
