import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  // np onSearchSubmit = async (term) => {}
  async onSearchSubmit(term) {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    // DRUGA OPCJA DO ZROBIENIA TEGO, BEZ ASYNC
    // .then((response) => {
    //   console.log(response.data.results)
    // })
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
