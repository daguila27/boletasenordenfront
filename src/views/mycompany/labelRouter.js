/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import React, {useState, useCallback, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Categories from "./categories/mycategories";
import Roles from "./role/myroles";


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
//Router para confeccionar componente panelAppend.js
//entrega el componente (conjunto de <span>) con el
//nombre que se coloque en props.typeLabel
//dataList es una lista de números (ej: [1,2,3]), son pk de Categorias o Roles
const LabelRouter = (props) => {
    const {
        dataList,
        onClickItem,
        Component
    } = props;

    return (
        <Component ids={dataList} onClickItem={onClickItem} />
    );
};
export default LabelRouter;