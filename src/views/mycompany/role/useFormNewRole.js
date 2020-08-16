import {useCallback} from 'react'
import axios from 'axios';

export default function ({onStartLogin, onError, onSuccess}) {

    const submitForm = useCallback(
        async ({nombre, idcompany, idcategories}) => {
            try {
                if (onStartLogin) await onStartLogin();
                const submitResponse = await axios.post(process.env.REACT_APP_BACKEND_URL+"/roles/addRole",
                    {
                        nombre: `${nombre}`,
                        idcompany: `${idcompany}`,
                        idcategories: `${idcategories}`
                    });

                if(!submitResponse.data.err){
                    if (onSuccess) await onSuccess(submitResponse.data.msg);
                }else{
                    if (onError) await onError(submitResponse.data.msg);
                }

            } catch (err) {
                if (onError) await onError(err);
            }
        },
        [onError, onStartLogin, onSuccess],
    );

    return submitForm
}

