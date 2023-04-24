import {POST_API_DATA,POST_API_ERROR} from '../ActionTypes/ActionType'
import api from '../Api'
export const PostApiData = (data) => async (dispatch) => {
    console.log("postadata=========>",data);

    try {
  
      const res = await api.post( "orders",  data );
  
      dispatch({
  
        type: POST_API_DATA,
  
        payload: { data: res.data },
  
      });
  
    } catch (error) {
  
      dispatch({
  
        type: POST_API_ERROR,
  
        payload: { data: error },
  
      });
  
    }
  }