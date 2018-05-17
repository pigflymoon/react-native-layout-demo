import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Fix from './src/Fix';
import Layout from './src/Layout';
export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Layout/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },


});
