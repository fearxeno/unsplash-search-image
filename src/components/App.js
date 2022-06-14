import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./App.css";

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container center aligned">
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
