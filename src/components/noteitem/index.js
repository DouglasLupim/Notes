import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default ({ data, index, onPress }) => {
    return(
        <TouchableOpacity style={styles.noteTouch} onPress={() => onPress(index)}>
            <Text style={styles.noteText}>{data.title}</Text>
        </TouchableOpacity>
    );
}
