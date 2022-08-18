import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";

const ListChats = () => {
  const [chat, setChat] = useState([
    { id: 1, name: "Владимир Путин" },
    { id: 2, name: "Джозеф Байден" },
    { id: 3, name: "Володимир Зеленский" },
    { id: 4, name: "Олаф Шольц" },
    { id: 5, name: "Эмманюэль Макрон" },
    { id: 6, name: "Си Цзиньпин" },
  ]);

  return (
    <Box className="chatList" sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav  aria-label="secondary mailbox folders">
        <List
          subheader={<ListSubheader>Задать вопрос президенту:</ListSubheader>}
        >
          {chat.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`${item.name}`}
                    src={`/static/images/avatar/${item.id}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default ListChats;