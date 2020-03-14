import React from "react";
import MainConversation from "./MainConversation";
import s from "./style.module.scss";



const Messages = () => {
  return (
    <div className={s.tagChat}>
      <MainConversation />
    </div>
  );
};

export default Messages;
