import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, FlatList } from 'react-native';
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

    const handleNotePress = () => {

    }

    return (
        <View style={styles.container}>
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
        </View>
    );
}
