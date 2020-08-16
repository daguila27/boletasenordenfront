import React from 'react';
import MyCompany from '../mycompany/mycompany.js';
import MenuSup from "../menu/menusup";
import MyAccount from "./myaccount";


import MyEmployeeCostTable from './myemployeeCostTable.js';

const CuentaView = () => {

    return (
        <>
            <MenuSup />
            <div style={{display: "flex"}}>
                <MyAccount />
                <MyCompany />
            </div>
            <MyEmployeeCostTable />
            <div>
            </div>
        </>
    );
};

export default CuentaView;