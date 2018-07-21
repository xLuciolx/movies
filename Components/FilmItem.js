import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class FilmItem extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Image style={styles.image} source={{ uri: "image" }} />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.tite_text}>Titre du film</Text>
                        <Text style={styles.vote_text}>Votes</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.description_text} numberOfLines={6}>
                            Description
                        </Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.date_text}>Sorti le 00/00/00</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: "row"
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: "gray"
    },
    content: {
        flex: 1,
        flexDirection: "column",
        margin: 5
    },
    header: {
        flex: 1,
        flexDirection: "row"
    },
    tite_text: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 20,
        flexWrap: "wrap",
        paddingRight: 5
    },
    vote_text: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#666"
    },
    description: {
        flex: 3
    },
    description_text: {
        color: "#666",
        fontStyle: "italic"
    },
    date: {
        flex: 1
    },
    date_text: {
        textAlign: "right"
    }
});

export default FilmItem;
