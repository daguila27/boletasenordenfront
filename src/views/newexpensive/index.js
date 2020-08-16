import React, {useState, useCallback} from 'react';
import MenuSup from "../menu/menusup";
import NewExpensive from "./newexpensive.js";



const ConfigView = () => {
    return (
        <>
            <MenuSup/>
            <div style={{display: "flex"}}>
                <NewExpensive/>
            </div>
            <div>
            </div>
        </>
    );
};

export default ConfigView;