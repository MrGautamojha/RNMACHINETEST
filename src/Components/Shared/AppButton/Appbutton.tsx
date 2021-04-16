import React from 'react';
import {StyleSheet, ViewStyle, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import scaler from '../../../Utilities/scaler';

const width = Dimensions.get('screen').width;

type PropType = {
  style?: ViewStyle;
  height: number;
  children: any;
  onPress: any;
  loading: boolean;
};

function AppButton(props: PropType) {
  const {styles, children, onPress, loading} = useAppButton(props);
  return (
    <Button
      style={styles.outerStyle}
      contentStyle={styles.contentStyle}
      mode={'contained'}
      onPress={onPress}
      loading={loading}>
      {children}
    </Button>
  );

  function useAppButton(props: PropType) {
    const {height, children, style, onPress, loading} = props;
    const styles = StyleSheet.create({
      outerStyle: {
        borderRadius: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 230,
        minWidth: width / 2.5,
        ...style,
      },
      contentStyle: {
        paddingHorizontal: scaler(30),
        height: height,

        minWidth: width / 2.5,
      },
    });

    return {
      styles,
      children,
      onPress,
      loading,
    };
  }
}

AppButton.defaultProps = {
  height: scaler(90),
  loading: false,
};

export default AppButton;
