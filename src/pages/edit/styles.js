import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    title: {
      padding: '5%',
      fontWeight: 'bold',
      fontSize: 20,
    },

    body: {
      flex: 1,
      padding: '5%',
    },

    iconSave: {
      marginRight: 10,
    },

    iconClose: {
      marginLeft: 10,
    },

    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1%'
    },

    deleteBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ff3333',
      width: 100,
      height: 30,
      borderRadius: 10,
    },  
    
    deleteText: {
      color: '#fff',
    },

  });

  export default styles;
  