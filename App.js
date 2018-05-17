import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.subViewRow}>
                    <View style={styles.subModuleRow}></View>
                    <View style={styles.subModuleRow}></View>
                    <View style={styles.subModuleRow}></View>
                    <View style={styles.subModuleRow}></View>
                </View>
                <View style={styles.subViewColumn}>
                    <View style={styles.subModuleColumn}></View>
                    <View style={styles.subModuleColumn}></View>
                    <View style={styles.subModuleColumn}></View>
                    <View style={styles.subModuleColumn}></View>
                </View>
                <View style={styles.subViewAlignItems}>
                    <View style={styles.subModuleAlignItems}></View>
                    <View style={styles.subModuleAlignItems}></View>
                    <View style={styles.subModuleAlignItems}></View>
                    <View style={styles.subModuleAlignItems}></View>
                </View>
                <View style={styles.subViewJustifyContent}>
                    <View style={styles.subModuleJustifyContent}></View>
                    <View style={[styles.subModuleJustifyContent, styles.subModuleJustifyContent1]}></View>
                    <View style={styles.subModuleJustifyContent}></View>
                    <View style={styles.subModuleJustifyContent}></View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    subViewRow: {
        flex: 1,
        flexDirection: 'row',
    },
    subModuleRow: {
        flex: 1,
        height: 100,
        backgroundColor: '#555555',
        marginRight: 10,

    },
    subViewColumn: {
        flex: 1,
        height: 500,
        flexDirection: 'column',
    },
    subModuleColumn: {
        flex: 1,
        height: 120,
        backgroundColor: '#84f396',
        marginBottom: 10,

    },
    subViewAlignItems: {
        flex: 1,
        height: 300,
        backgroundColor: '#2ac5d4',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    subModuleAlignItems: {
        flex: 1,
        height: 100,
        backgroundColor: '#f6b5f9',
        marginRight: 10,
    },
    subViewJustifyContent: {
        flex: 1,
        flexDirection: 'row',
        // flexWrap:'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',//space-around, space-between,flex-start,flex-end,center
        height: 150,
        // width: 500,
        backgroundColor: '#eef7a5'
    },
    subModuleJustifyContent: {
        flex: 1,
        // width: 50,
        height: 100,
        backgroundColor: '#9ab0f7',
        marginRight: 10,
    },
    subModuleJustifyContent1: {
        flex: 2,
        backgroundColor:'#5874f7'
    }


});
