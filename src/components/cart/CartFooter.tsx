import {Truck} from 'iconoir-react-native';
import {StyleSheet, View} from 'react-native';
import {Text} from '../custom/Text';

export const CartFooter = () => {
  return (
    <View style={styles.TitleContainer}>
      <Text style={styles.text}>رسوم التوصيل: 10$</Text>
      <Truck color={'#04ACD6'} width={15} height={15} />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginHorizontal: 5,
    color: '#04ACD6',
  },
  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '1%',
    paddingHorizontal: '4%',
    marginBottom: '3%',
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,0.01)',
  },
});
