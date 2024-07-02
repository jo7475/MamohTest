import {CheckCircle, Circle} from 'iconoir-react-native';
import {StyleSheet} from 'react-native';
type CheckMarkProps = {
  selected: boolean;
  size?: number;
};
export const CheckMark = ({selected, size = 18}: CheckMarkProps) => {
  return (
    <>
      {selected ? (
        <CheckCircle color={'#203F77'} width={size} height={size} />
      ) : (
        <Circle width={size} height={size} style={styles.CircleIcon} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  CircleIcon: {
    opacity: 0.6,
  },
});
