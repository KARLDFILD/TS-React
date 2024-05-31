import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppState } from "./redux/state";

function App(props: {
  state: AppState;
  addPost: (postMessage: string) => void;
  updateNewPostText: (newPostText: string) => void;
}) {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />-
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/"
              element={
                <Profile
                  PostData={props.state.PostData}
                  addPost={props.addPost}
                  newPostMessage={props.state.newPostMessage}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />

            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogsData={props.state.dialogsData}
                  messages={props.state.messages}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
