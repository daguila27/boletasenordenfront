import React, {useState, useCallback} from 'react';
import MyCompany from './mycompany.js';
import Companygraph from './companygraph.js';
import EmployeeCostTable from './employeeCostTable.js';

import ModalRole from './role/modal_role.js';
import ModalCategorie from './categories/modal_categorie.js';
import MenuSup from "../menu/menusup";
import axios from "axios";

const CompanyView = (props) => {
    const iduser = props.match.params.iduser;
    return (
        <>
            <MenuSup iduser={iduser} />
            <div style={{display: "flex"}}>
                <MyCompany iduser={iduser} />
                <Companygraph iduser={iduser} />
            </div>
            <div>
                <EmployeeCostTable iduser={iduser} style={{ width:"90%",marginLeft:"5%"}}/>
            </div>
        </>
    );
};

export default CompanyView;