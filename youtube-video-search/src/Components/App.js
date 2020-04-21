import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import GoogleAPI from "../api/GoogleAPI";
import VideoShow from "./VideoShow";
import VideoList from "./VideoList";
const KEY = "AIzaSyAMNLOGRZxC3hz4rZ0hqTJCv9HE261DtQA";
class App extends React.Component {
  state = { youtubeVideos: [], videoSelected: null };

  componentDidMount() {
    this.onSearchTermSubmit("buildings");
  }

  onSearchTermSubmit = async (term) => {
    const response = await GoogleAPI.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    this.setState({
      youtubeVideos: response.data.items,
      videoSelected: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ videoSelected: video });
    console.log(video);
  };
  render() {
    return (
      <div className="ui segment ">
        <SearchBar onSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoShow video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videoDetails={this.state.youtubeVideos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
