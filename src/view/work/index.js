import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import getWork from '../../store/action/getWork';
import Frame from '../../common/component/Frame';
import Skeleton from '../../common/component/Skeleton';
import Main from './main';

import '../../common/css/miiaov.css';


function Work(props) {
  let {id} = useParams();
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state.work;
  });
  
  useEffect(() => {
    dispatch(getWork(id));

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
      
      <footer className="miiapv_footer">回复本贴</footer>
    </div>
  )
}


export default Work;

