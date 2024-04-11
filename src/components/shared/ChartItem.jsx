import { Link } from "../Stylecomponent";
import { Stack, Typography, Box } from "@mui/material";
import { memo } from "react";
import AvatarCard from "./AvatarCard";

const ChartItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link to={`/Chart/${_id}`} onContextMenu={()=>handleDeleteChat(e,_id,groupChat)}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        <AvatarCard avatar={avatar}/>
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count}new Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:"green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translate(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChartItem);
