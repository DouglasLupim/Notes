import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { store, persistor } from './src/store';
import MainRoute from './src/routes/main.routes';

export default () => {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainRoute />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
