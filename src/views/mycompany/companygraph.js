/*cuadro de grafico - se puede ver en New Mockup 3*/
import React from 'react';

import { Bar } from 'react-chartjs-2';




const Companygraph = () => {


    return (
        <div className="card" style={{width: "40%", margin: "5%"}}>
            Gráfico

            <Bar
                data={["1", "2", "3", "4"]}
                width={10}
                height={10}
                options={{ maintainAspectRatio: true }}
            />
        </div>
    );
};

export default Companygraph;