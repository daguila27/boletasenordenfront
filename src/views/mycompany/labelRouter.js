/*cuadro de información referente a empresa - se puede ver en New Mockup 3*/
import React from 'react';



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