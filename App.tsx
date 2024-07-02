import React from 'react';
import {StatusBar} from 'react-native';
import CartFull from './src/screens/CartFull';
import {IconoirProvider} from 'iconoir-react-native';

function App(): React.JSX.Element {
  return (
    <IconoirProvider
      iconProps={{
        color: '#333333',
        strokeWidth: 2,
        width: 20,
        height: 20,
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <CartFull />
    </IconoirProvider>
  );
}

export default App;
