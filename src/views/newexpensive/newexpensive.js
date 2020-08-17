/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import axios from "axios";
import React, {useState, useCallback, useEffect} from 'react';
import useForm from "./useFormNewExpensive.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FileDrop from './FileDrop';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '36.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

    par: {
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '0px',
        paddingBottom: '10px',
        paddingTop: '10px',
        display: 'flex'
    },
    parInput: {
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '0px',
        paddingBottom: '10px',
        paddingTop: '10px',
        display: 'flex',
        alingItem: 'start',
        justifyContent: 'space-between'
    },



    input:{
        maxWidth: '80%'
    },

    cardimage: {
        borderRadius: '50%',
        width: '30%'
    }
}));



const MyAccount = () => {
    const classes = useStyles();
    const [dataCategories, setCategoriesData] = useState([]);
    //const iduser = props.match.params.iduser;
    const iduser = 1;
    const idrol = 3;
    const newexpensive = useCallback(
        async ({iduser, idrol}) => {
            try {
                const dataMyCategories = await axios.post(process.env.REACT_APP_BACKEND_URL+`/categories/getDataCategoriesForUser`,
                    {iduser: iduser, idrol: idrol});

                if(!dataMyCategories.data.err){
                    //LOS DATOS SE OBTIENEN EXITOSAMENTE
                    setForm({
                        descripcion: form.descripcion,
                        valor: form.valor,
                        idcategoria: dataMyCategories.data.datos[0].idCategoria,
                        idrol: form.idrol,
                        idusuario: form.idusuario,
                        image: form.image
                    });
                    setCategoriesData(dataMyCategories.data.datos);
                }else{
                    //HA OCURRIDO UN ERROR AL OBTENER LOS DATOS
                }
            } catch (err) {
                console.log(err);
            }
        }, []
    );

    const [error, setError] = useState(null);
    const [load, setLoad] = useState(null);

    const onStart = useCallback( () => {
        setLoad(true);
        if(load===true){alert("Cargando ...");}
    });
    const onSuccess = useCallback( (msg) => {
        setLoad(false);
        setError(false);
        alert(msg);
        window.location.href = "/newexpensive";
    });
    const onFailed = useCallback( (msg) => {
        setLoad(false);
        setError(true);
        if(error===true){alert(msg);}
    });

    const [form, setForm] = useState({
        descripcion: null,
        valor: null,
        idcategoria: null,
        idrol: idrol,
        idusuario: iduser,
        image: null
    });




    //SE USA PARA EJECUTAR UNA FUNCION CADA VEZ QUE ALGO CAMBIE EN MI DEPENDENCIA
    //AYUDA A QUE LA OBTENCIÓN DE INFORMACIÓN SE HAGA SOLO AL INGRESAR POR PRIMERA VEZ
    //useEffect(() => {mycompany()}, [mycompany]);
    //SI MI FUNCION mycompany LLEGA A CAMBIAR ENTONCES EJECUTA mycompany()
    useEffect(() => {newexpensive({iduser, idrol})}, [newexpensive]);

    const submitForm = useForm({onStartLogin: onStart, onError: onFailed, onSuccess: onSuccess});

    const onSubmit = useCallback( (ev) => {
        ev.preventDefault();
        alert(file);
        setForm({
            descripcion: form.descripcion,
            valor: form.valor,
            idcategoria: form.sidcategoria,
            idrol: form.idrol,
            idusuario: form.idusuario,
            image: form.image
        });

        submitForm(form, file);
    });

    return (
        <div style={{display: 'flex',   flexDirection: 'column', alignSelf: 'center', width: "100%"}}>
            <h3 style={{width: '50%', padding:0, alignSelf: 'center', alignContent: 'flex-start', display: 'flex'}}>Registrar Gasto : </h3>
            <Card style={{width: '50%', alignSelf: 'center'}}>
                <CardContent>
                    <form id={"formExpensive"} onSubmit={onSubmit}>
                        <label className={classes.parInput}>
                            Detalle su Gasto :
                            <input className={'form-control'} type='text' name='descripcion'
                                   value={form.descripcion}
                                   onChange={({target: {value}}) => setForm({
                                       descripcion: value,
                                       valor: form.valor,
                                       idcategoria: form.idcategoria,
                                       idrol: form.idrol,
                                       idusuario: form.idusuario,
                                       image: form.image
                                   })}
                                   style={{maxWidth: '80%'}}/>
                        </label>
                        <label className={classes.parInput}>
                            Valor Total :
                            <input className={'form-control'} type='number'
                                   value={form.valor}
                                   onChange={({target: {value}}) => setForm({
                                       descripcion: form.descripcion,
                                       valor: value,
                                       idcategoria: form.idcategoria,
                                       idrol: form.idrol,
                                       idusuario: form.idusuario,
                                       image: form.image
                                   })}
                                   name='valor' style={{maxWidth: '80%'}} />
                        </label>
                        <label className={classes.parInput}>
                            Categoría :
                            <select className={'form-control'} name='idcategoria'
                                    value={form.idcategoria}
                                    onChange={({target: {value}}) => setForm({
                                        descripcion: form.descripcion,
                                        valor: form.valor,
                                        idcategoria: value,
                                        idrol: form.idrol,
                                        idusuario: form.idusuario,
                                        image: form.image
                                    })}
                                    style={{maxWidth: '80%'}}>
                                {dataCategories.map((value, index) => {
                                    return <option key={`cat-option-${index}`} value={value.idCategoria}>{value.nombre}</option>
                                })}
                            </select>
                        </label>
                        <div style={{'border': '1px dashed black', 'borderRadius': '1%'}}>
                            <FileDrop id={'inputFile'} name="inputFile"
                                      value={form.image}
                                      onChange={({target: {value}}) => {
                                          setForm({
                                              descripcion: form.descripcion,
                                              valor: form.valor,
                                              idcategoria: form.idcategoria,
                                              idrol: form.idrol,
                                              idusuario: form.idusuario,
                                              image: value
                                          });
                                      }}
                                      type="file"/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end', margin: '10px'}}>
                            <button>Cancelar</button>
                            <button type={'submit'}>Enviar</button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default MyAccount;