/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import React, {useState, useCallback, useEffect} from 'react';
import axios from "axios";

const Roles = (props) => {
    let idroles = props.ids;
    const [rolesData, setDataRoles] = useState([]);

    const myroles = useCallback(
        async ({idroles}) => {
            if(idroles.length){
                try {
                    const RolesData = await axios.post(process.env.REACT_APP_BACKEND_URL+"/roles/getRolesData",
                        {idroles: idroles});

                    //iduser debe ser el administrador de la empresa en la plataforma
                    if(!RolesData.data.err){
                        //LOS DATOS SE OBTIENEN EXITOSAMENTE
                        setDataRoles(RolesData.data.datos);
                    }else{
                        //HA OCURRIDO UN ERROR AL OBTENER LOS DATOS
                        console.log(RolesData.data.err);
                    }
                } catch (err) {console.log(err);}
            }
        }, [idroles]
    );

    useEffect(() => { myroles({idroles: idroles}) }, [myroles] );



    return (
        <>
            {rolesData.map((value, index) => {
                return <span
                    key={value.idRol}
                    className="badge badge-pill badge-success rolLabel"
                    style={{padding: "5px", margin: "3px", cursor: "pointer"}}
                    onClick={() => {props.onClickItem(value.nombre, value.idRol)}}
                >{value.nombre}</span>
            })}
        </>
    );
};

export default Roles;