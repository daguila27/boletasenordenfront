/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import React, {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import Roles from "../role/myroles";
import useFormCategorie from "./useFormNewCategorie.js";
import PanelAppend from "../panelAppend.js";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },

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


const ModalCategorie = (props) => {
    const {
        idCompany,
        buttonLabel,
        idroles
    } = props;
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const onOpenModal = useCallback( () => {
        setModal(true);
    });
    const onCloseModal = useCallback( () => {
        setModal(false);
    });
    const toggle = () => setModal(!modal);


    /**enviar el formulario, generar registro de categoria y CategoriaPermitida**/
    const [error, setError] = useState(null);
    const [load, setLoad] = useState(null);

    const onStart = useCallback( () => {
        setLoad(true);
        if(load === true){alert("Cargando ...");}
    });
    const onSuccess = useCallback( (msg) => {
        setLoad(false);
        setError(false);
        alert(msg);
        window.location.reload();
    });
    const onFailed = useCallback( (msg) => {
        setLoad(false);
        setError(true);
        if(error===true){alert(msg);}
    });

    const [formCategorie, setFormCategorie] = useState({
        nombre: "",
        idroles: "",
        idcompany: idCompany
    });

    //[submitForm, setSubmitForm] => Boleano usado para indicar si se ha enviado el formulario
    //cuando se actualiza submitForm usando setSubmitForm() se ejecuta el callback
    //que envia el formulario con submitFormCategorie
    const submitFormCategorie = useFormCategorie({onStartLogin: onStart, onError: onFailed, onSuccess: onSuccess});

    const onSubmit = useCallback( (ev) => {
        ev.preventDefault();
        submitFormCategorie(formCategorie);
    });
    return (
        <div>
            <button  type="button" className={'likeLink'} onClick={onOpenModal}>&#43; {buttonLabel}</button>
            <Modal
                open={modal}
                onClose={onCloseModal}
                className={classes.modal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={modal}>
                    <div className={classes.paper}>
                        <div className={classes.root}>
                            <form id={'formCategories'} onSubmit={onSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <p className={classes.parInput}>
                                            Crear Nueva Categoría:
                                        </p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <p className={classes.parInput}>
                                            Nombre:
                                            <input type={'text'}
                                            value={formCategorie.nombre}
                                            onChange={({target: {value}}) => setFormCategorie({
                                                ...formCategorie,
                                                idcompany: idCompany,
                                                nombre: value
                                                })}/>
                                        </p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <PanelAppend Component={Roles} dataList={idroles} onChange={(data) => {
                                            setFormCategorie({
                                                ...formCategorie,
                                                idcompany: idCompany,
                                                idroles: data.join(','),
                                            });
                                        }}/>
                                    </Grid>
                                    <Grid item xs={12} style={{display: 'flex', flexAlign: 'right'}}>
                                            <button className={'btn'} type={'button'} onClick={toggle}> Cancelar</button>
                                            <button className={'btn'} type={'submit'}> Enviar</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ModalCategorie;