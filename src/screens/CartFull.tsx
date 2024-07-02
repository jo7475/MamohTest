import {ArrowRight, CheckCircle, Shop, Trash} from 'iconoir-react-native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from '../components/custom/Text';
import {CheckMark} from '../components/common/CheckMark';
import {CartTitle} from '../components/cart/CartTitle';
import {CartItemCard} from '../components/cart/CartItemCard';
import {CartFooter} from '../components/cart/CartFooter';
import {CartPriceSummery} from '../components/cart/CartPriceSummery';

export default function CartFull() {
  return (
    <ScrollView style={styles.Container} scrollEnabled={true}>
      <View style={styles.HeaderContainer}>
        <View style={styles.TrashContainer}>
          <Trash />
          <Text fontFamily="Almarai-Bold">حذف</Text>
        </View>
        <Text fontFamily="Almarai-Bold">سلة المشتريات</Text>
        <ArrowRight />
      </View>
      <CartTitle title={'متجر محاميد'} selected />
      <CartItemCard
        name="بلوزة أبيض مع أزرق تركي خامات راقية"
        selected={true}
        color="#C04354"
        colorText="كبير"
        uri=""
        price={35}
        discount={15}
      />
      <CartItemCard
        name="بلوزة أبيض مع أزرق تركي خامات راقية"
        selected={true}
        color="#10436F"
        colorText="كبير"
        uri=""
        price={35}
        discount={15}
      />
      <CartFooter />
      <CartTitle title={'متجر Zourob'} selected={false} />
      <CartItemCard
        name="بلوزة أبيض مع أزرق تركي خامات راقية"
        selected={false}
        color="#313035"
        colorText="كبير"
        uri=""
        price={35}
        discount={15}
      />
      <CartFooter />
      <CartPriceSummery />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
  },
  TrashContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderContainer: {
    padding: '4%',
    paddingTop: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});
