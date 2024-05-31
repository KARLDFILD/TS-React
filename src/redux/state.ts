import { rerenderEntireTree } from "../render";

export interface AppState {
  PostData: PostProps[];
  dialogsData: DialogsProps[];
  messages: messagesProps[];
  newPostMessage: string;
}
export interface PostProps {
  id: number;
  message: string;
  LikeCounter: number;
}

export interface DialogsProps {
  [x: string]: any;
  id: number;
  name: string;
}

export interface messagesProps {
  id: number;
  message: string;
}
let dialogsData = [
  { id: 1, name: "Alina" },
  { id: 2, name: "Alexander" },
  { id: 3, name: "Ivan" },
];
let PostData = [
  { id: 1, message: "Zdarova", LikeCounter: 20 },
  { id: 1, message: "Zdarova", LikeCounter: 20 },
];

let messages = [
  { id: 1, message: "Privet" },
  { id: 2, message: "PSNH" },
  { id: 3, message: "Poka" },
];

let state = {
  newPostMessage: "Ivan",
  PostData: [
    { id: 1, message: "Zdarova", LikeCounter: 20 },
    { id: 2, message: "Zdarova", LikeCounter: 20 },
  ],
  dialogsData: [
    { id: 1, name: "Alina" },
    { id: 2, name: "Alexander" },
    { id: 3, name: "Ivan" },
  ],
  messages: [
    { id: 1, message: "Privet" },
    { id: 2, message: "PSNH" },
    { id: 3, message: "Poka" },
  ],
};

export let addPost = (postMessage: string) => {
  let newPost = {
    id: 3,
    message: state.newPostMessage,
    LikeCounter: 0,
  };
  state.PostData.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostNext = (newPostText: string) => {
  state.newPostMessage = newPostText;
  rerenderEntireTree(state);
};

export default state;
