import React, { useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import Message from "./Message";
import SendMessageForm from "./SendMessageForm";
import { Scrollbar } from 'react-scrollbars-custom';
import logo from '../../assets/no-message.png';
const Mainbar = ({ msges, user, messagesEndRef, send }) => {
  useEffect(() => {
    // Scroll to the bottom of the container when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [msges, messagesEndRef]);

  return (
    <Grid
      item
      xs={10}
      style={{
        position: "absolute",
        top: "70px",
        bottom: "45px",
        right: "0",
        width: "75%",
      }}
    >
      <Scrollbar
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#333333",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
      >
        {msges && msges.length > 0 ? (
          msges.map((msg, i) => (
            <Message
              key={i}
              sender={msg.sender}
              message={msg.message}
              timeStamp={msg.timeStamp}
              isCurrentUser={msg.sender === user.username}
            />
          ))
        ) : (
          <div
          style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"}}>
            <img src={logo} alt="No messages yet" style={{height:"200px",width:"200px"}}/>
          </div>
        )}
        <div ref={messagesEndRef} />
      </Scrollbar>
      <SendMessageForm send={send} />
    </Grid>
  );
};
export default Mainbar;