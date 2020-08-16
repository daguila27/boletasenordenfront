import React from 'react';
import MyCompany from './mycompany.js';
import Companygraph from './companygraph.js';
import EmployeeCostTable from './employeeCostTable.js';

import MenuSup from "../menu/menusup";

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