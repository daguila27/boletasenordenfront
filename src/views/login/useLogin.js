import {useCallback} from 'react'
import axios from 'axios';

export default function ({onStartLogin, onError, onSuccess}) {

  const login = useCallback(
    async ({email, password}) => {
      try {
        if (onStartLogin) await onStartLogin();
        console.log(`${email} ${password}`);

        const loginResponse = await axios.post(process.env.REACT_APP_BACKEND_URL+"/users/getLogin",
            {
            email: `${email}`,
            password: `${password}`});

          //SIEMPRE RESPONDE UN JSON
          // /*{err = true|false, msg = ""}*/

          if(!loginResponse.data.err){
              if (onSuccess) await onSuccess(loginResponse.data.iduser);
          }else{
              if (onError) await onError(loginResponse.data.msg);
          }

      } catch (err) {
        if (onError) await onError(err);
      }
    },
    [onError, onStartLogin, onSuccess],
  );

  return login
}

