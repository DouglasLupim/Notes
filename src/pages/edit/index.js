import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default () => {

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector(state => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if(route.params?.key != undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, []);

  return (
      <View style={styles.container}>
          <TextInput 
            style={styles.title} 
            placeholder='Título'
            value={title}
            onChangeText={title=>setTitle(title)}
          />
          <TextInput 
            style={styles.body} 
            placeholder='Digite suas Anotações'
            textAlignVertical='top'
            value={body}
            onChangeText={body=>setBody(body)}
          />
      </View>
  );
}
