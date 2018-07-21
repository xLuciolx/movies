import React from "react";
import { StyleSheet, View, TextInput, Button, FlatList, Text } from "react-native";
import films from "../Helpers/filmsData";
import FilmItem from "./FilmItem";

class Search extends React.Component {
    render() {
        return (
            // Return elements of the view
            <View style={styles.main_container}>
                <TextInput placeholder="Titre du film" style={styles.textInput} />
                <Button title="Rechercher" style={{ height: 50 }} onPress={() => {}} />
                <FlatList
                    data={films}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <FilmItem />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: "#000",
        borderWidth: 1,
        paddingLeft: 5
    },
    main_container: {
        flex: 1,
        marginTop: 20
    }
});

export default Search;
