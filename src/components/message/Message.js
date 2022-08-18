// Импорт стилей компонента сообщений
import "./message.scss";
import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";

const Message = ({ message }) => {
  return (
      <div className="messages">
      <Badge
        color="secondary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        badgeContent={message.author}
      >
        <Paper className="text">{message.textMessage}</Paper>
      </Badge>
      </div>
  );
};

export default Message;
