import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import getWork from '../../store/action/getWork';
import Frame from '../../common/component/Frame';
import Skeleton from '../../common/component/Skeleton';
import Main from './main';
import Message from './message';

import '../../common/css/miiaov.css';


function Work(props) {
  let {id} = useParams();
  let history = useHistory();
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state.work;
  });
  let user = useSelector(state => {
    return state.getUser;
  });

  let [showMessage, setShow] = useState(false);
  // useEffect(() => {
  //   dispatch(getMessageList(id));
  // }, []);
  
  useEffect(() => {
    dispatch(getWork(id));
    // dispatch(getMessageList(id));

    return () => {
      dispatch({
        type: 'WORK_RESET'
      });
    }
  }, []);
  let {data, loading} = state;
  return (
    <div>
      <Frame>
        {
          loading? <Skeleton />: 
          <Main
            data={data}
          />
        }
      </Frame>
      
      <footer className="miiapv_footer"
        onClick={() => {
          if (user) {
            setShow(true);
          } else {
            history.push('.login');
          }
        }}
      >回复本贴</footer>
      <Message 
        show={showMessage}
        setShow={setShow}
        id={id}
      />
    </div>
  )
}


export default Work;

