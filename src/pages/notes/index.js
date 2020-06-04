import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import NoteItem from '../../components/noteitem';
import Icon from 'react-native-vector-icons/Feather';


export default () => {
    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suas Notas',
            headerRight: () => (
                <TouchableOpacity style={styles.iconPlus} onPress={() => navigation.navigate('EditarNotas')}>
                    <Icon name="plus" size={24} color="black" /> 
                </TouchableOpacity>
            )
        });
    }, []);

    const handleNotePress = (index) => {
        navigation.navigate('EditarNotas', {
            key: index
        });
    }

    return (
        <View style={styles.container}>
            {list.length > 0 && 
                <FlatList style={styles.flat}
                    data={list}
                    renderItem={({item, index}) => (
                        <NoteItem 
                            data={item}
                            index={index}
                            onPress={handleNotePress}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            }
            {list.length == 0 &&
                <View style={styles.noNotes}>
                    <Icon name="send" size={24} color="black" /> 
                    <Text>Você não possui notas!</Text>
                </View>
            }
        </View>
    );
}
