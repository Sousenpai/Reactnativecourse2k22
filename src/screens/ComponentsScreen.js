import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
const ComponentsScreen = () => {
    const greeting = <Text>HELLO TO YOU</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>
                THIS IS THE COMPONENT SCREEN </Text>
            <Text style={styles.subHeaderStyle}>
                THIS IS THE subheaderstyle </Text>

            {greeting}
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 45
    }

});
export default ComponentsScreen;