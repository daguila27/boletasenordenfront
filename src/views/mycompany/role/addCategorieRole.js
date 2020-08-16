/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import React, {useState, useCallback, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../css/styles.css';

//formulario para adjuntar roles a categorias y viceversa
//recibe una lista de objetos {nombre: 'categoria/role', id: idcategoria/idrole}
const AddCategorieRole = (props) => {
    return (
        <div>
            <div style={{border: "1px solid black", minHeight: 10}}></div>
            <div style={{border: "1px solid black"}}>
                <span className="badge badge-pill badge-success" style={{padding: "5px", margin: "3px", cursor: "pointer"}}>Gerente</span>
                <span className="badge badge-pill badge-success" style={{padding: "5px", margin: "3px", cursor: "pointer"}}>Gerente</span>
                <span className="badge badge-pill badge-success" style={{padding: "5px", margin: "3px", cursor: "pointer"}}>Gerente</span>
                <span className="badge badge-pill badge-success" style={{padding: "5px", margin: "3px", cursor: "pointer"}}>Gerente</span>
                <span className="badge badge-pill badge-success" style={{padding: "5px", margin: "3px", cursor: "pointer"}}>Gerente</span>
            </div>
        </div>
    );
};

export default AddCategorieRole;