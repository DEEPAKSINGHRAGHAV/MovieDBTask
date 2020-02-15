import React, { Component, PureComponent } from "react";

import {
    View,
    Text,
    Button,
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Image,
    TouchableOpacity
} from "react-native";

import * as movieActions from './store/actions/Action';

import { connect } from 'react-redux'

class HomePage extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            page: 1
        };
    }

    componentDidMount(){
        this.props.loadMovies();
    }

    fetchMore = () => {
        this.setState({
            page: this.state.page + 1
        },()=> {
            this.props.loadMovies(this.state.page);
        })
    }

renderFooter() {
    return (
      <View >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.fetchMore}>
          <Text style={{ borderColor: "#36802b", borderRadius: 7, borderWidth: 2, textAlign: "center", fontSize: 20 }}>Load More</Text>
          {this.props.isLoading ? (
            <ActivityIndicator animating size="large" />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }



    render() {
        // console.log("popularMovies", this.props.popularMovies);
        return (
            <View style={{ marginHorizontal: 8, marginVertical: 8 }}>
                {this.props.isLoading?<ActivityIndicator />:<SafeAreaView>
      <FlatList
        data={this.props.popularMovies}
        ListFooterComponent={this.renderFooter.bind(this)}
        renderItem={({ item }) =><View style={{ backgroundColor: "#f4f4f4", borderBottomColor: "gray", borderBottomWidth: 2, marginVertical: 8 }}>
        <Image style={{ height: 150, width: "100%" }} source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }} />
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", padding: 10  }}>{item.title.toUpperCase()}</Text>
        <Text style={{ fontStyle: "italic", padding: 10 }} >{item.overview}</Text>
        </View>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>}
            </View>
  );      
    }
}

function mapStateToProps(state) {
    return {
        popularMovies: state.popularMovies,
        isLoading: state.isLoading,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadMovies: (page) => dispatch(movieActions.loadMovies(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
