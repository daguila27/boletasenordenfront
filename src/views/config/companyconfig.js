/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import React from 'react';
import logo from '../../logoprueba.png';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
            <h3 style={{padding:0,  alignSelf: 'flex-start'}}>Empresa : </h3>
            <Card>
                <CardContent>
                    <label className={classes.parInput}>
                        Empresa:
                        <p className={classes.parInpar}>Node</p>
                    </label>
                    <label className={classes.parInput}>
                        Moneda:
                        <select className={'form-control input-xs'} name="money" id="money" style={{width: '70%'}} >
                            <option value="usd">USD</option>
                            <option value="clp">CLP</option>
                        </select>
                    </label>

                    <label htmlFor="" className={classes.par} style={{paddingBottom: '2px'}}>Logo:</label>
                    <div style={{padding: '5px 50px'}}>
                        <CardMedia className={classes.logochange}
                                   image={logo}
                                   title="LOGO"/>
                    </div>
                    <input className={classes.par} type="file"/>
                </CardContent>
            </Card>
        </div>
    );
};

export default MyAccount;