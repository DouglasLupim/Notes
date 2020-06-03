import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notes from '../pages/notes';
import Edit from '../pages/edit';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name='Notas' component={Notes} />
        <Stack.Screen name='EditarNotas' component={Edit} />
    </Stack.Navigator>
);
