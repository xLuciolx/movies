import React from "react";
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator } from "react-native";
import FilmItem from "./FilmItem";
import { getMoviesFromSearch } from "../API/TMDBApi";

class Search extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        this.state = { films: [], isLoading: false };
        this.searchText = "";
    }
    // _ for "private" method
    _loadFilms() {
        if (this.searchText.length > 0) {
            this.setState({ isLoading: true });
            getMoviesFromSearch(this.searchText)
                .then(data => {
                    this.setState({ films: data.results, isLoading: false });
                })
                .catch(err => console.error(err));
        }
    }

    _searchTextInputChanged(text) {
        this.searchText = text;
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }
    }
    render() {
        console.log(this.state.isLoading);

        return (
            // Return elements of the view
            <View style={styles.main_container}>
                <TextInput
                    placeholder="Titre du film"
                    style={styles.textInput}
                    onChangeText={text => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadFilms()}
                />
                <Button
                    title="Rechercher"
                    style={{ height: 50 }}
                    onPress={() => this._loadFilms()}
                />
                <FlatList
                    data={this.state.films}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
                {this._displayLoading()}
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
    },
    loading: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Search;
