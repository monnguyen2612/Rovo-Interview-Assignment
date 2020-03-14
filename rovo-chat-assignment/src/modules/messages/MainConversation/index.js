import React, { useEffect } from "react";
import moment from "moment";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Icon from "@material-ui/core/Icon";
import s from "./style.module.scss";
import axios from "axios";
import data from "./data.json";

const MainConversation = () => {
  useEffect(async () => {
    // await axios
    //   .get(
    //     "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/375209de-844d-4b48-bd5f-b6a8169f0b19/chat.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45LDX2JJHR%2F20200314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200314T081351Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCmbXILeq4Q0SpoqiMqHSW5RHuRl2UNFT7SrlUNoJ1r2AIhAOMa0K8qSZJBdsd%2BLP4%2BhV8cl2UM13R32r9XaXqIWyybKrQDCFgQABoMMjc0NTY3MTQ5MzcwIgxYOjT6LZkcdVhTevwqkQNxQVhbruEX2zpFkj%2Fze4fNJ6uNfY9BLdZPEDoE1VN%2B2KQT%2FjN%2B%2BiST9%2FzbQXMcwrKpa%2BTM1VCjNcOu%2Fx3zNK2hUMw01pYKxq%2BDE9vfqcj6hqdS8gS8jCn1%2FKGRfjuqi3Kg9Gmv6t%2B4ojDY8sm1E%2FQV74TS3QnIufI5l31NWgt0zfY4AKvzK25Jki3MMmwIRdDmQWh1goMgumULwawY8ep7xGrm9DF9Riwu%2FHwV9cwITmKpcjlJljJirmRfTVsTPQoQIjSS41PSPkuqkv8kI6PMVFRt4bEeXrm0LmkUSxldhefjuPckYp9cZ%2FynXbGoQHnwC9yw4BKC1I1cUrJRiNq4waoFUMzMRz6RNO0NyTCPoW4FwYU8HVA7eWCLULL2RMIuaY2xQ9I8Dyi6lOCmsZ21kKhn1nyJd5zphuM48cOsxIaKU5S7Y6ZoQhB9RRZyD%2FJjyKT065eX1ZERRVnWciv7yvOBZQJJ5Zn5mrIQA%2BO1qJbiUk%2Fu9q0D35wZMmnpS9U8uyh7fakWxsns7UWog9NmYzDR%2BLHzBTrqAaN%2BU0ZZyfSJoAm4q2gT7IMgE8omyVP7yamz11UERAO1MwVamoepdDFs0nIPTKFYMpIixR8IdGWUExQGQVleiUl75Hve1BuCJHL%2F5P2ZG3U0m73hV2fHbeQ05r3IFRCNM7OYsgUlty4DNgGD8u565FfVeksSa2OHM09AxGCr%2F4wseAgllAADyTjgRBnvhtdQ3brxotPCgoyr6kmW6tpCLnRLqBHqNSGAKHAdLx5rOJg6%2FyYcZnZKJxTXfzJhnwTlVMrJ714nLIHlwd9EIdzRW6mqLzFFTW03VnH29fUghyzjCHM4dkaGO8JzMA%3D%3D&X-Amz-Signature=a173d3d5b127ae9f34986ddfddbc7dd966ed853964194ab9fac56e0fe9b2bce1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Chats.json%22"
    //   )
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   })
    //   .then(function() {
    //     // always executed
    //   });
  });

  return (
    <div className={s.mainConversation}>
      <div className={s.titleContainer}>
        <div className={s.titleContentContainer}>
          <h2>Tennis Buddy</h2>
        </div>
      </div>
      <div className={s.messageListContainer}>
        {data.messages.reverse().map(item =>
          item.type !== "SYSTEM" ? (
            <div
              className={
                item.type !== "SYSTEM"
                  ? item.sender.name === "James Dam"
                    ? s.myMessageContainer
                    : s.oppositeMessageContainer
                  : null
              }
            >
              <img
                src={item.type === "SYSTEM" ? null : item.sender.picture}
                alt=""
              />
              <div>
                <h5>{item.type !== "SYSTEM" ? item.sender.firstName : null}</h5>
                <div>{item.type === "TEXT" ? item.content.text : null}</div>
                {item.type === "PHOTO" ? (
                  <img src={item.content.url} alt="" />
                ) : null}
                <p>{moment(item.createdAt).toNow()}</p>
              </div>
            </div>
          ) : (
            <div className={s.systemMessage}>
              <h3>{moment(item.createdAt).toNow()}</h3>
              <p>{item.content.text}</p>
            </div>
          )
        )}
        <div className={s.anchor} />
      </div>

      <div className={s.inputMessage}>
        <CameraAltIcon
          style={{ position: "absolute", left: 35, bottom: 25, color: "#bbb" }}
        ></CameraAltIcon>
        <input
          type="text"
          name="name"
          placeholder="Type message"
          autocomplete="off"
        />

        <Icon style={{ color: "#012390", cursor: "pointer" }}>send</Icon>
      </div>
    </div>
  );
};
export default MainConversation;
