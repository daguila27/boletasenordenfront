/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import React from 'react';
import perfil from '../../perfil.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
        display: 'flex',
        alingItem: 'start'
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
    logochange:{
        height: 0,
        paddingTop: '36.25%', // 16:9
        border: '1px solid black'
    },

    parInpar: {
        width: '70%',
        margin:0,
        padding: 0,
        textAlign: 'left'
    },

    cardimage: {
        borderRadius: '50%',
        width: '30%'
    }
}));



const MyAccount = () => {
    const classes = useStyles();

    //SE USA PARA EJECUTAR UNA FUNCION CADA VEZ QUE ALGO CAMBIE EN MI DEPENDENCIA
    //AYUDA A QUE LA OBTENCIÓN DE INFORMACIÓN SE HAGA SOLO AL INGRESAR POR PRIMERA VEZ
    //useEffect(() => {mycompany()}, [mycompany]);
    //SI MI FUNCION mycompany LLEGA A CAMBIAR ENTONCES EJECUTA mycompany()



    return (
        <div style={{display: 'flex',   flexDirection: 'column', width: "40%", margin: "5%"}}>
                <h3 style={{ padding:0, alignSelf: 'flex-start'}}>Mi Cuenta : </h3>
                <Card>
                    <CardContent>

                        <div>
                            <img className={classes.cardimage}
                                 src={perfil}
                                 title="LOGO"/>
                        </div>
                        <label htmlFor="">Giuseppe Vergolini</label>
                        <label className={classes.parInput}>
                            RUT:
                            <p className={classes.parInpar}>11.222.333-4</p>
                        </label>
                        <label className={classes.parInput}>
                            Mail:
                            <p className={classes.parInpar}>daguila.gallardo@gmail.com</p>
                        </label>
                        <a>
                            Cambiar Contraseña
                        </a>

                        <label className={classes.parInput}>
                            Lenguaje:
                            <select className={'form-control input-xs'}  style={{width: '70%'}}>
                                <option value="usd">Español</option>
                                <option value="clp">Ingles</option>
                            </select>
                        </label>
                    </CardContent>
                </Card>
        </div>
    );
};

export default MyAccount;