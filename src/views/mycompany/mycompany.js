/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import React, {useState, useCallback, useEffect} from 'react';
import logo from '../../logoprueba.png';
import axios from "axios";
import Roles from './role/myroles.js';
import Categories from './categories/mycategories.js';
import ModalRole from "./role/modal_role";
import ModalCategorie from "./categories/modal_categorie";



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


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
    items: {
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '0px',
        paddingBottom: '10px',
        paddingTop: '10px'
    }

}));



const MyCompany = () => {
    const classes = useStyles();
    const [dataCompany, setCompanyData] = useState({});
    const [rolList, setRolList] = useState([]);
    const [catList, setCatList] = useState([]);
    //const iduser = props.match.params.iduser;
    const iduser = 1;

    const mycompany = useCallback(
        async ({iduser}) => {
            try {
                const dataMyCompanyResponse = await axios.post(process.env.REACT_APP_BACKEND_URL+`/company/getDataCompany`,
                    {iduser: iduser});
                //iduser debe ser el administrador de la empresa en la plataforma
                if(!dataMyCompanyResponse.data.err){
                    //LOS DATOS SE OBTIENEN EXITOSAMENTE
                    /**[RowDataPacket {
                        idEmpresa: 1,
                        idAdmin: 1,
                        num_empleados: 1,
                        idrol_concat: '1,2,3',
                        idcat_concat: '1,2,3'
                      }]**/
                    setCompanyData(dataMyCompanyResponse.data.datos[0]);
                    setRolList(dataMyCompanyResponse.data.datos[0].idrol_concat.split(','));
                    setCatList(dataMyCompanyResponse.data.datos[0].idcat_concat.split(','));
                    console.log("Mostrando dataCompany");
                    console.table(dataMyCompanyResponse.data.datos[0]);
                }else{
                    //HA OCURRIDO UN ERROR AL OBTENER LOS DATOS
                    console.log(dataMyCompanyResponse.data.err);
                }
            } catch (err) {
                console.log(err);
            }
        }
        , []
    );

    //SE USA PARA EJECUTAR UNA FUNCION CADA VEZ QUE ALGO CAMBIE EN MI DEPENDENCIA
    //AYUDA A QUE LA OBTENCIÓN DE INFORMACIÓN SE HAGA SOLO AL INGRESAR POR PRIMERA VEZ
    //useEffect(() => {mycompany()}, [mycompany]);
    //SI MI FUNCION mycompany LLEGA A CAMBIAR ENTONCES EJECUTA mycompany()
    useEffect(() => {mycompany({iduser: iduser})}, [mycompany]);

    return (
        <div style={{display: 'flex',   flexDirection: 'column', width: "40%", margin: "5%"}}>
            <h3 style={{ padding:0, alignSelf: 'flex-start'}}>Empresa : </h3>
            <Card>
                <CardMedia className={classes.media}
                    image={logo}
                    title="LOGO"/>
                <CardContent>
                        <label className={classes.par}>
                            Empleados: {dataCompany.num_empleados}
                        </label>
                        <Typography className={classes.items} variant="body2" color="textSecondary" component="p">Roles Creados: <br />
                            <Roles ids={rolList} />
                        </Typography>
                        <ModalRole idcategories={catList}  ClassName={"rolModal"} buttonLabel={'Añadir Rol'} idCompany={dataCompany.idEmpresa}/>
                        <Typography className={classes.items} variant="body2" color="textSecondary" component="p">Categorías Creadas: <br />
                            <Categories ids={catList} />
                        </Typography>
                        <ModalCategorie idroles={rolList} ClassName={"categoriaModal"} buttonLabel={"Añadir Categoría"} idCompany={dataCompany.idEmpresa}/>
                </CardContent>
            </Card>
        </div>
    );
};

export default MyCompany;