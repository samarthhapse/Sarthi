import axios from "axios";

const MESSAGE_URL = "http://localhost:5000/api/v1/message";
const USER_URL = "http://localhost:5000/api/v1/user";
const CHAT_URL = "http://localhost:5000/api/v1/chat";

const getMessages = ({ token, receiverId }) =>
  axios.get(`${MESSAGE_URL}/${receiverId}`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: token,
    },
  });

const sendMessage = ({ token, message, senderModel, receiverId }) =>
  axios.post(
    `${MESSAGE_URL}/send/${receiverId}`,
    { message, senderModel },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: token,
      },
    }
  );

const getChats = ({token}) =>
  axios.get(CHAT_URL, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: token,
    },
  });

const getUserInfo = ({ id }) => axios.get(`${USER_URL}/${id}`);
export { getMessages, sendMessage, getUserInfo, getChats };
