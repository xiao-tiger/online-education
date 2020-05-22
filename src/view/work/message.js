import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import putMessage from "../../store/action/putMessage";


function Message(props) {
  let {show, setShow, id} = props;
  let [info, setInfo] = useState("");
  let [put, setPut] = useState(false);
  let dispatch = useDispatch();
  let user = useSelector(state => {
    return state.getUser;
  });

  return (
    <div
      className="message_wrap"
      style={{
        transform: `translateY(${show ? 0 : "100%"})`
      }}
    >
      <textarea
        placeholder="请写下你的评论"
        value={info}
        onChange={(e) => {
          setInfo(e.target.value);
        }}
      />
      {
        put?<footer className="miiapv_footer put">评论提交中……</footer>:
        <footer 
          className="miiapv_footer"
          onClick={() => {
            if(!info.trim()) {
              alert("不可提交空白内容");
              return ;
            }
            dispatch(putMessage({
              article_id: id,
              content: info
            })).then(res => {
              setPut(false);
              setInfo('');
              setShow(false);
              dispatch({
                type: 'MESSAGE_ADD',
                messageList: {
                  content: info,
                  create_time: Date.now(),
                  username: user
                }
              })
            })
            setPut(true);
          }}
        >发表评论</footer>
      }
      
    </div>
  )
}


export default Message;
