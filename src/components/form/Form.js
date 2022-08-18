import React, { useState, useRef } from "react";
import "./form.scss";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
const Form = ({ create }) => {
  // Данные одного сообщения
  const [message, setMessage] = useState({
    author: "",
    textMessage: "",
  });

  const messageTextInput = useRef(null);
  // Добавление сообщения
  const addNewMessage = (e) => {
    // Убрать действия по умолчанию
    e.preventDefault();
    // Фокус на поле ввода сообщения
    messageTextInput.current.focus();
    // Добавляю к сообщению ID
    const newMessage = {
      ...message,
      id: Date.now(),
    };

    setTimeout(() => {
      create(newMessage);
      window.scrollTo(500, document.body.scrollHeight, { behavior: "smooth" });
    }, 1);
    setMessage({ author: message.author, textMessage: "" });
  };
  return (
    <div className="form">
      <TextField
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setMessage({ ...message, author: e.target.value })}
        id="outlined-basic"
        label="Ваше Имя"
        variant="filled"
        color="warning"
        value={message.author}
      />
      <div className="textarea">
        <TextField
          size="small"
          fullWidth
          multiline
          minRows={2}
          maxRows={4}
          onChange={(e) =>
            setMessage({ ...message, textMessage: e.target.value })
          }
          id="textMessage"
          label="Сообщение"
          variant="filled"
          color="warning"
          value={message.textMessage}
          autoFocus
          inputRef={messageTextInput}
        />
        <IconButton
          onClick={addNewMessage}
          color="secondary"
          aria-label="add to shopping cart"
          size="large"
        >
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Form;
