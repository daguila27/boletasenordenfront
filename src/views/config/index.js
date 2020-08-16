import React, {useState, useCallback} from 'react';
import MenuSup from "../menu/menusup";
import MyAccountConfig from "./accountconfig";
import MyCompanyConfig from "./companyconfig";



const ConfigView = () => {
    return (
        <>
            <MenuSup/>
            <div style={{display: "flex"}}>
                <MyAccountConfig title={'Mi Cuenta'} />
                <MyCompanyConfig/>
            </div>
            <div>
            </div>
        </>
    );
};

export default ConfigView;