import {useCallback} from 'react'
import axios from 'axios';

export default function ({onStartLogin, onError, onSuccess}) {

    const submitForm = useCallback(
        async ({descripcion,valor,idcategoria,idrol, idusuario, image}, file) => {
            try {
                if (onStartLogin) await onStartLogin();
                const submitResponse = await axios.post(process.env.REACT_APP_BACKEND_URL+"/expensives/addExpend",
                    {
                        descripcion: `${descripcion}`,
                        valor: `${valor}`,
                        idcategoria: `${idcategoria}`,
                        idrol: `${idrol}`,
                        idusuario: `${idusuario}`,
                        image: `${image}`
                    });

                if(!submitResponse.data.err){
                    if (onSuccess) await onSuccess(submitResponse.data.msg);

                    const submitFileImage = await axios.post(process.env.REACT_APP_BACKEND_URL+"/uploadFile",
                        {
                            image: `${image}`,
                            file: `${file}`
                        });

                    if(!submitFileImage.data.err){
                        if (onSuccess) await onSuccess(submitFileImage.data.msg);
                    }else{
                        if (onError) await onError(submitFileImage.data.msg);
                    }
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

