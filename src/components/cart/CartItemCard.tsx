import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CheckMark} from '../common/CheckMark';
import {Text} from '../custom/Text';
import {Minus, Plus} from 'iconoir-react-native';
import {useState} from 'react';
type CartItemProps = {
  name: string;
  selected: boolean;
  uri: string;
  colorText: string;
  color: string;
  price: number;
  discount?: number;
};
export const CartItemCard = ({
  name,
  selected,
  uri,
  colorText,
  color,
  price,
  discount,
}: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const styles = useStyle(color);
  return (
    <View style={styles.Container}>
      <View style={styles.DetailContainer}>
        <View style={styles.DescriptionContainer}>
          <Text style={styles.Title}>{name}</Text>
          <View style={styles.ColorContainer}>
            <Text style={styles.ColorText}>{colorText}</Text>
            <View style={styles.ColorDisplay} />
          </View>
          <View style={styles.PriceAndQuantity}>
            <View style={styles.QuantityContainer}>
              <TouchableOpacity style={styles.SubtractButton}>
                <Minus color={'#808080'} />
              </TouchableOpacity>
              <Text style={styles.QuantityText}>{quantity.toString()}</Text>
              <TouchableOpacity style={styles.AddButton}>
                <Plus color={'#203F77'} />
              </TouchableOpacity>
            </View>
            <View style={styles.Price}>
              {discount ? (
                <>
                  <Text style={styles.DiscountText}>خصم 15%</Text>
                  <Text style={styles.AmountDiscounted}>$40.25</Text>
                  <Text style={styles.PriceText}>{'$' + price.toString()}</Text>
                </>
              ) : (
                <Text style={styles.PriceText}>{'$' + price.toString()}</Text>
              )}
            </View>
          </View>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/4b/ea/c1/4beac1a2ceb6ff197cd14c57547d5356.jpg',
            }}
            style={styles.Image}
          />
        </View>
      </View>
      <CheckMark selected={selected} />
    </View>
  );
};
const useStyle = (color: string) => {
  const styles = StyleSheet.create({
    Image: {
      width: 68,
      aspectRatio: 68 / 75,
      borderRadius: 4,
    },
    PriceText: {
      fontWeight: '700',
    },
    AmountDiscounted: {
      color: '#9CA3AF',
      textDecorationLine: 'line-through',
      marginRight: 3,
      fontSize: 12,
    },
    DiscountText: {
      color: '#EA580C',
      marginRight: 3,
      fontSize: 12,
    },
    Price: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    AddButton: {
      height: 20,
      width: 20,
      borderRadius: 2,
      borderWidth: 0.8,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#203F77',
    },
    QuantityText: {
      marginHorizontal: 10,
    },
    SubtractButton: {
      height: 20,
      width: 20,
      borderRadius: 2,
      borderWidth: 0.8,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#808080',
    },
    QuantityContainer: {
      flexDirection: 'row',
    },
    PriceAndQuantity: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '3%',
    },
    ColorDisplay: {
      backgroundColor: color,
      height: 20,
      width: 20,
      borderRadius: 20,
    },
    ColorText: {
      paddingHorizontal: 5,
      paddingVertical: 2,
      fontSize: 12,
      borderRadius: 5,
      borderWidth: 0.4,
      borderColor: 'rgba(0,0,0,0.3)',
      marginRight: 7,
    },
    ColorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    Title: {
      color: '#203F77',
    },
    DescriptionContainer: {
      justifyContent: 'space-between',
      flex: 1,
      paddingRight: '2%',
    },
    DetailContainer: {
      marginRight: '3%',
      backgroundColor: '#F8F8F8',
      flex: 1,
      paddingVertical: '3%',
      borderRadius: 5,
      paddingRight: '2%',
      flexDirection: 'row',
    },
    Container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: '4%',
      width: '100%',
      marginBottom: '2%',
    },
  });
  return styles;
};
