import React, {useCallback, useEffect} from 'react';
import MaterialTable from 'material-table';
//import MaterialUiIcons from 'material-ui-icons';
import axios from "axios";




const MaterialTableEmployee = () => {
    const idcompany = 1;
    /**
     * RowDataPacket {
            idUsuario: 3,
            email: 'email2@gmail.com',
            nombre: 'Aaaa',
            apellido: 'Bbbb',
            pass: '1234',
            disable: 0,
            rol: 'Obrero',
            total_gastado: null
          }
     * **/
    const [table, setTable] = React.useState({
        columns: [
            { title: 'Nombre', field: 'nombre' },
            { title: 'Rol', field: 'rol' },
            { title: 'Total Gastado', field: 'total', type: 'numeric' },
            { title: 'Registro', field: 'registro'},
        ],
        data: [],
    });


    const tableemployee = useCallback(
        async ({idcompany}) => {
            try {
                const dataMyEmployee = await axios.post(process.env.REACT_APP_BACKEND_URL+`/company/getEmployee`,
                    {idcompany: idcompany});

                if(!dataMyEmployee.data.err){
                    //LOS DATOS SE OBTIENEN EXITOSAMENTE
                    setTable(
                        {
                            columns: [
                                { title: 'Nombre', field: 'nombre' },
                                { title: 'Rol', field: 'rol' },
                                { title: 'Total Gastado', field: 'total', type: 'numeric' },
                                { title: 'Registro', field: 'registro'},
                            ],
                            data: dataMyEmployee.data.datos
                        });
                }else{
                    //HA OCURRIDO UN ERROR AL OBTENER LOS DATOS
                }
            } catch (err) {
                console.log(err);
            }
        }
        , []
    );

    useEffect(() => {tableemployee({idcompany})}, [tableemployee]);
    return (
        <MaterialTable
            title="Editable Example"
            columns={table.columns}
            data={table.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setTable((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setTable((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setTable((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}/>
    );
};

export default MaterialTableEmployee;