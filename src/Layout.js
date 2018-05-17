import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
// so absolute positioning is always just relative to the parent.
export default class Layout extends React.Component {
    render() {
        return (
            <ScrollView style={styles.innerContainer}>
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
                    <View style={[styles.subModuleAlignItems, styles.subModuleAlignSelf]}></View>
                    <View style={styles.subModuleAlignItems}></View>
                </View>
                <View style={styles.subViewJustifyContent}>
                    <View style={styles.subModuleJustifyContent}></View>
                    <View style={[styles.subModuleJustifyContent, styles.subModuleJustifyContent1]}></View>
                    <View style={styles.subModuleJustifyContent}></View>
                    <View style={styles.subModuleJustifyContent}></View>
                </View>
                <View style={[styles.innerContainer, styles.boxContainer]}>
                    <View style={styles.box1}>
                        <Text style={styles.text}>1</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.text}>2</Text>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.text}>3</Text>
                    </View>
                </View>
                <View style={[styles.innerContainer, styles.boxContainer]}>
                    <View style={styles.box4}>
                        <Text style={styles.text}>1</Text>
                        <View style={styles.ball}/>
                    </View>
                    <View style={styles.box5}>
                        <Text style={styles.text}>2 Cardmaker App</Text>
                    </View>
                </View>
            </ScrollView>
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
    innerContainer: {
        flex: 1,
        marginBottom: 100,
    },
    boxContainer: {
        height: 300,
        backgroundColor: '#a8e0f7'
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
    subModuleAlignSelf: {
        alignSelf: 'flex-start',
        backgroundColor: '#f055f9',

    },
    subViewJustifyContent: {
        flex: 1,
        flexDirection: 'row',
        // flexWrap:'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',//space-around, space-between,flex-start,flex-end,center
        height: 150,
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
        backgroundColor: '#5874f7'
    },
    box1: {
        position: 'absolute',
        top: 40,
        left: 40,
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    box2: {
        position: 'absolute',
        top: 80,
        left: 80,
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        transform: [{'translate': [0, 0, 1]}]
    },
    box3: {
        position: 'absolute',
        top: 120,
        left: 120,
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },
    text: {
        color: '#ffffff',
        fontSize: 32,
        fontFamily: 'Billabong',
    },
    box4: {
        position: 'relative',
        top: 40,
        left: 40,
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    box5: {
        position: 'absolute',
        top: 100,
        left: 100,
        width: 200,
        height: 100,
        backgroundColor: 'blue'
    },
    ball: {
        position: 'absolute',
        top: 40,
        left: 40,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'yellow'
    },


});
