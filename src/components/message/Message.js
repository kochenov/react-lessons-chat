// Импорт стилей компонента сообщений
import "./message.scss";

const Message = ({ message }) => {
  return (
    <div className="message">
      <p> {message.author}</p>
      <blockquote>{message.textMessage}</blockquote>
    </div>
  );
};

export default Message;