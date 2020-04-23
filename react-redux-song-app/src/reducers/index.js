import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Bom Bom Diggy", duration: "4:05" },
    { title: "Back Street Boys", duration: "2:01" },
    { title: "Subha Hony na dy", duration: "2:33" },
    { title: "Tera hont laga", duration: "4:44" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
