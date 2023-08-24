import React, { Component } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>App</Text>
                    <Text style={styles.titleText}>Estelar</Text>
                </View>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Nave Espacial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Mapa Estelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Imagens Diárias</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#7c7c7c'
    },
    routeCard:{
        flex: 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: '#fff'
    },
    routeText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#D11583',
        justifyContent: 'center',
        alignItems: 'center'
    }
})