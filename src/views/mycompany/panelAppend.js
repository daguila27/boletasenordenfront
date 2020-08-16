import React, {useState, useEffect} from 'react';

const PanelAppend = (props) => {
    let {
        dataList,
        onChange,
        Component
    } = props;
    /**Codigo necesario para usar los paneles de seleccion de roles**/
    const [labelListAdd, setListAdd] = useState([]);
    const [labelList, setList] = useState(dataList.map((item) => {return parseInt(item);}));
    const appendLabel = (text, id) => {
        //SE ADJUNTA EL ROL A LA LISTA SUPERIOR
        setListAdd( labelListAdd.concat([{text: text,id:  parseInt(id)}]) );

        //SE QUITA EL ROL DE LA LISTA INFERIOR
        //let index = labelList.map((item)=>{return item.toString();}).indexOf( id.toString() );
        //Se elimina el item con el index indexOf(id)
        //Se actualiza la ventana de etiquetas inferior
        setList(labelList.filter((item) => {
            return id.toString() !== item.toString(); }));
    };
    const deleteLabel = (text, id) => {
        //SE ADJUNTA EL ROL A LA LISTA INFERIOR
        setList( labelList.concat([parseInt(id)]) );

        //SE QUITA EL ROL DE LA LISTA SUPERIOR
        setListAdd( labelListAdd.filter(( item ) => {return item.id !== id}) );
    };
    //IMPORTANTE para actualizar labelList al recibir el parametro iditems en props.
    useEffect(() => {setList(dataList)}, [dataList]);
    useEffect(() => {onChange(labelListAdd)}, [labelListAdd]);
    /**Codigo necesario para usar los paneles de seleccion de roles - FIN**/


    return (
        <div style={{border: 'solid 1px black', minHeight: 'auto'}}>
            <div id={'panelRol'}>
                {labelListAdd.map((value) => {
                    return <span
                        key={value.id}
                        className="badge badge-pill badge-success"
                        style={{padding: "5px", margin: "3px", cursor: "pointer"}}
                        onClick={() => {deleteLabel(value.text, value.id)}}
                    >{value.text} </span>
                })}
            </div>
            <br/>
            <input type="text" placeholder={'Buscador'}/>
            <br/>
            <Component ids={labelList} onClickItem={appendLabel} />
        </div>
    );
};

export default PanelAppend;