import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AppState, addPost, updateNewPostNext } from "./redux/state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export let rerenderEntireTree = (state: AppState) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostNext}
      />
    </React.StrictMode>
  );
};
