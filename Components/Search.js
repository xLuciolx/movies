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
        this.page = 0;
        this.totalPages = 0;
    }
    // _ for "private" method
    _loadFilms() {
        if (this.searchText.length > 0) {
            this.setState({ isLoading: true });
            getMoviesFromSearch(this.searchText, this.page + 1)
                .then(data => {
                    this.page = data.page;
                    this.totalPages = data.total_pages;
                    this.setState({
                        films: [...this.state.films, ...data.results],
                        isLoading: false
                    });
                })
                .catch(err => console.error(err));
        }
    }

    _searchFilms() {
        this.page = 0;
        this.totalPages = 0;
        this.setState(
            {
                films: []
            },
            () => {
                this._loadFilms();
            }
        );
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

    _displayFilmDetail = idFilm => {
        console.log("Display film with id: " + idFilm);
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm });
    };

    render() {
        return (
            // Return elements of the view
            <View style={styles.main_container}>
                <TextInput
                    placeholder="Titre du film"
                    style={styles.textInput}
                    onChangeText={text => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />
                <Button
                    title="Rechercher"
                    style={{ height: 50 }}
                    onPress={() => this._searchFilms()}
                />
                <FlatList
                    data={this.state.films}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <FilmItem film={item} displayFilmDetail={this._displayFilmDetail} />
                    )}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.state.films.length > 0 && this.page < this.totalPages) {
                            this._loadFilms();
                        }
                    }}
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
        flex: 1
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
