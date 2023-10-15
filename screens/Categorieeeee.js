import React from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from "react-native";

const data = [
    { id: "1", source: require("../assets/houses.png"), text: "Houses" },
    { id: "2", source: require("../assets/apartment.png"), text: "Apartments" },
    { id: "3", source: require("../assets/condos.png"), text: "Condos" },
    { id: "4", source: require("../assets/land.png"), text: "Land " },
    { id: "5", source: require("../assets/building.png"), text: "Building" },
    { id: "6", source: require("../assets/townhouses.png"), text: "Towm Houses" },
];

const Categories = () => {
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <ImageBackground source={item.source} style={styles.image}>
                <Text style={styles.text}>{item.text}</Text>
            </ImageBackground>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontWeight:800,fontSize:19,textAlign:"center"}}>Categories</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.container}
                />
            </View>
            <View style={styles.tabbar}>
                <View style={styles.tabitem}>
                    <TouchableOpacity><Image source={require('../assets/iconhome.png')}/><Text>Home</Text></TouchableOpacity>
                </View>
                <View style={styles.tabitem}>
                    <TouchableOpacity><Image source={require('../assets/iconcollection.png')}/><Text>Collection</Text></TouchableOpacity>
                </View>
                <View style={styles.tabitem}>
                    <TouchableOpacity><Image source={require('../assets/iconsaved.png')}/><Text>Saved</Text></TouchableOpacity>
                </View>
                <View style={styles.tabitem}>
                    <TouchableOpacity><Image source={require('../assets/iconsearch.png')}/><Text>Search</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 2,
        marginTop: 10,

    },
    // menu: {
    //     fontSize: 17,
    // },
    header: {
        marginTop: 10,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 380,
        height: 98,
        overflow: 'hidden',
        marginBottom: 8,
    },
    text: {
        position: 'absolute',
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        padding: 35,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    tabbar:{
        alignSelf:"center",
        flexDirection:"row",
        gap:50,
        marginTop:10,
    },
});

export default Categories;
