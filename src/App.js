// Импортирую Хуки
import React, { useState, useEffect } from "react";
// Импорт компонента сообщений
import Message from "./components/message/Message";
// подключение формы добавления сообщения
import Form from "./components/form/Form";
// Список чатов
import ListChats from "./components/ListChats";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  // Хранение сообщений (Задание 2 п.1)
  const [messages, setMessage] = useState([]);

  // Добавление сообщения в State
  const createMessage = (newMessage) => {
    // К существующим сообщениям добавляю новые
    setMessage([...messages, newMessage]);
  };

  // Это добавляет ответ робота , с небольшой задержкой
  useEffect(() => {
    // Проверяю, что есть сообщения
    if (messages.length > 0) {
      // Беру данные последнего сообщения
      let lastMsg = messages[messages.length - 1];
      // Ренерирую ответ робота
      let robotMsg = {
        id: Date.now(),
        author: "Робот Вася",
        textMessage:
          "Здравствуйте, " +
          lastMsg.author +
          ". Ваше сообщение принято! Ожидайте ответ специалиста.",
      };
      // Проверяю, что последнее сообщение не от робота
      if (lastMsg.author !== "Робот Вася") {
        // При помощи функции задерживаю ответ от робота
        setTimeout(() => {
          // Добавляю в общий стейт ответ робота
          setMessage([...messages, robotMsg]);

          window.scrollTo(600, document.body.scrollHeight, {
            behavior: "smooth",
          });
        }, 3500);
      }
    }
  }, [messages]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid className="left-column" xs={12} sm={4}>
        <ListChats />
        </Grid>
        <Grid xs={12} sm={8} className="right-col">
          {messages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
          
         <Form create={createMessage} />
        </Grid>
         
      </Grid>
      
    </Box>
  );
}

export default App;
