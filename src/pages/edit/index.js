import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default () => {

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector(state => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    console.log(list);
    if(route.params?.key != undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: { alignSelf: 'center' },
      title: status == 'new' ? 'Nova Anotação' : 'Editar Anotação',
      headerLeft: () => (
        <TouchableOpacity style={styles.iconClose} onPress={handleCloseButton}>
          <Icon name="x" size={24} color="black" /> 
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.iconSave} onPress={handleSaveButton}>
          <Icon name="save" size={24} color="black" /> 
        </TouchableOpacity>
      )
    })
  }, [status, title, body]);

  const handleCloseButton = () => {
    navigation.goBack();
  }

  const handleSaveButton = () => {
    if(title != '' && body != '') {
      if(status == 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.key,
            title,
            body
          }
        })
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {title, body}
        })
      }
      navigation.goBack();
    } else {
      alert('Preencha todos os campos!')
    }
  }

  const handleDeleteNote = () => {
    dispatch({
      type: 'DEL_NOTE',
      payload: {
        key: route.params.key
      }
    });
    navigation.goBack();
  }
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

          {status == 'edit' &&
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.deleteBtn} onPress={handleDeleteNote}>
                <Text>Excluir</Text>
              </TouchableOpacity>
            </View>
          }
      </View>
  );
}
