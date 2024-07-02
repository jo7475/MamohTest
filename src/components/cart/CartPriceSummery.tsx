import {useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {Text} from '../custom/Text';
import {NavArrowUp, ShieldSearch} from 'iconoir-react-native';

const Price = ({
  price,
  name,
  bold,
}: {
  price: string;
  name: string;
  bold: boolean | undefined;
}) => {
  const fontFamily = bold ? 'Almarai-Bold' : 'Almarai-Regular';
  const color = bold ? '#000000' : '#808080';

  return (
    <View style={styles.PriceCardContainer}>
      <Text style={{color: color}} fontFamily={fontFamily}>
        {price}
      </Text>
      <Text style={{color: color}} fontFamily={fontFamily}>
        {name}
      </Text>
    </View>
  );
};
export const CartPriceSummery = () => {
  const [collapsed, setCollapsed] = useState(true);
  const prices = [
    {
      price: '2',
      name: 'عدد العناصر',
    },
    {
      price: '$70',
      name: 'السعر',
    },
    {
      price: '$10',
      name: 'التوصيل',
    },
    {
      price: '$3',
      name: 'عمولة مامو',
    },
    {
      price: '$80',
      name: 'الإجمالي',
      bold: true,
    },
  ];
  return (
    <View style={styles.Container}>
      <Pressable onPress={() => setCollapsed(true)}>
        <Collapsible collapsed={collapsed}>
          <View style={styles.CollapsableHeaderContainer}>
            <NavArrowUp />
            <Text fontFamily="Almarai-Bold" style={styles.Title}>
              ملاحظة
            </Text>
          </View>
          <View style={styles.CollapsableBody}>
            <View style={styles.DiscriptionContainer}>
              <Text style={styles.Description}>
                السعر الخاص بالتوصيل يتم حسابه حسب العنوان التي تم تحديده عند
                تحميل التطبيق ويمكن تغيره من الصفحة القادمة: فلسطين - رفح - ر
              </Text>
              <Text style={styles.DescriptionFooter}>رفح - رفح الغربية</Text>
            </View>
            <ShieldSearch color="#808080" width={17} height={17} />
          </View>
          <View style={styles.PriceList}>
            {prices.map(item => {
              return (
                <Price name={item.name} price={item.price} bold={item.bold} />
              );
            })}
          </View>
        </Collapsible>
      </Pressable>
      <View style={{marginTop: collapsed ? 200 : 40, marginBottom: 20}}>
        <View>
          <View style={styles.ButtonContainer}>
            {collapsed && (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setCollapsed(false);
                  }}>
                  <NavArrowUp
                    onPress={() => {
                      setCollapsed(false);
                    }}
                  />
                </TouchableOpacity>
                <View style={styles.TotalSummery}>
                  <Text>الإجمالي</Text>
                  <Text>80</Text>
                </View>
              </>
            )}
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>اتمام عملية الشراء (2)</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TotalSummery: {
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  ButtonText: {
    color: 'white',
  },
  Button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#203F77',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 5,
  },
  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  PriceList: {
    marginTop: '5%',
  },
  DescriptionFooter: {
    textAlign: 'right',
    color: '#203F77',
  },
  Description: {
    textAlign: 'right',
    color: '#808080',
  },
  DiscriptionContainer: {
    marginRight: '2%',
  },
  CollapsableBody: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    paddingBottom: '5%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  Title: {
    fontSize: 16,
  },
  CollapsableHeaderContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '4%',
  },
  Container: {
    paddingHorizontal: '4%',
  },
  PriceCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
});
