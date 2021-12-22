import React from "react";
import { useFirestore } from "../../hooks/useFirestore";

export const Oxxo = () => {

  const { docs } = useFirestore("oxxoLider");

  let seconds

  docs.map((el) => {
    seconds = el.duration;
  });


const hora = new Date(seconds).toLocaleTimeString("es-CL")

let date = new Date(seconds).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
}); 

  return (
    <div  className="col border mb-5 p-3" 
          style={{height:'700px', overflow:'hidden', overflowY: 'scroll'}}>

      {docs.map((item) => (
      <div className="card shadow-sm mb-2">
       
        <div className="card-body p-3 pb-2 ">

          <div className="border d-flex border-secondary">
            <span className="bg-secondary p-1 col-3">
              <span className="text-white px-2"> Tienda {item.tienda} </span>
            </span>
         
            <span className="p-1 col-3">
              <span className="text-secondary px-2">Horario </span> {item.hora}
            </span> 

            <span className="p-1 col-3">
              <span className="text-secondary ">Destino </span> {item.destino}
            </span> 

            <span className="p-1 col-3">
              <span>{date}, {hora.slice(0, -3)}</span>
            </span>

          </div>

            <div>
              <span className="text-secondary">Pasajeros: </span> {item.pasajeros}
            </div>

            <div>
              <span className="text-secondary">Comentarios: </span> {item?.description}
            </div>

        </div>
      
      </div>
      ))}
    </div>
  );
};
