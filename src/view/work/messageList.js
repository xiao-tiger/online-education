import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import getMessageList from '../../store/action/getMessageList';


function MessageList(props) {
  let {id} = props;
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessageList(id));
  }, []);

  let data = useSelector(state => {
    return state.messageList;
  });
  console.log(data);

  let {messageList} = data;
  return (
    <ul className="comment_list">
      {
        messageList.map((item, index) => {
          return (
            <li key={index}>
              <div className="user_comment clearfix">
                <span>{item.username}</span>
              </div>
              <div className="comment_txt">{item.content}</div>
                <div className="comment_footer">
                  <time>17分钟前</time>
                  <button>编辑</button>
                </div>
            </li>
          )
        })
      }

    </ul>
  )
}


export default MessageList;


