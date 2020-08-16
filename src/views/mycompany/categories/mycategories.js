/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/

import React, {useState, useCallback, useEffect} from 'react';
import axios from "axios";

const Categories = (props) => {
    const idcategories = props.ids;
    //const idcategories = [1,2,3];
    const [categoriesData, setDataCategories] = useState([]);
    const mycategories = useCallback(
        async ({idcategories}) => {
            if(idcategories.length){
                try {
                    const CategoriesData = await axios.post(process.env.REACT_APP_BACKEND_URL+"/categories/getCategoriesData",
                        {idcategories: idcategories});

                    //iduser debe ser el administrador de la empresa en la plataforma
                    if(!CategoriesData.data.err){
                        //LOS DATOS SE OBTIENEN EXITOSAMENTE
                        setDataCategories(CategoriesData.data.datos);
                    }else{
                        //HA OCURRIDO UN ERROR AL OBTENER LOS DATOS
                        console.log(CategoriesData.data.err);
                    }
                } catch (err) {console.log(err);}
            }
        }, [idcategories]
    );
    useEffect(() => { mycategories({idcategories: idcategories}) }, [mycategories] );
    return (
        <>
            {categoriesData.map((value, index) => {
                return <span
                    key={value.idCategoria}
                    className="badge badge-pill badge-success"
                    style={{padding: "5px", margin: "3px", cursor: "pointer"}}
                    onClick={() => {props.onClickItem(value.nombre, value.idCategoria)}}>{value.nombre}</span>
            })}
        </>
    );
};

export default Categories;