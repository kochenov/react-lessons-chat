// Импортирую Хуки
import React, { useState, useEffect } from "react";
// Импорт компонента сообщений
import Message from "./components/message/Message";
// подключение формы добавления сообщения
import Form from "./components/form/Form";

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
    <div className="App">
      <header>
        <div className="App-header">
          {messages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </div>
      </header>
      <Form create={createMessage} />
    </div>
  );
}

export default App;