import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { getImageFromApi } from "../API/TMDBApi";

class FilmItem extends React.Component {
    render() {
        const film = this.props.film;
        return (
            <View style={styles.main_container}>
                <Image style={styles.image} source={{ uri: getImageFromApi(film.poster_path) }} />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.description_text} numberOfLines={6}>
                            {film.overview}
                        </Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
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
        flex: 2,
        flexDirection: "row"
    },
    title_text: {
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
        flex: 4
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
