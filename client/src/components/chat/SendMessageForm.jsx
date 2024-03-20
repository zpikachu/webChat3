import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";  
import SendIcon from "@mui/icons-material/Send";

const SendMessageForm = ({ send }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() !== "") {
      send(text);
      setText("");
    }
  };

  return (
    <div
    style={{
      position: "fixed",
      height:"45px",
      width: "75%",
      bottom: 0,
      left: "25%", // Adjusted left property
      right: 0, // Set right to 0 to align it to the right edge of the screen
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(8px)",
      display: "flex",
      padding: "8px",
      alignItems: "left",
      zIndex: 999, // Ensure it's above other elements

      backgroundColor:"violet"

    }}
    
    >
      <TextField
        fullWidth
        variant="standard"
        placeholder="Type your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        InputProps={{
          style: {
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            color: "white",
            flexGrow: 1,
          },
          endAdornment: (
            <IconButton onClick={handleSend} color="primary">
              <SendIcon />
            </IconButton>
          ),
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />
    </div>
  );
};

export default SendMessageForm;
