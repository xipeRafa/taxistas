import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export const AuctionCard = ({ item, handleState}) => {
  const { currentUser, bidAuction } = useContext(AuthContext);

  const { docs } = useFirestore("auctions");

  let seconds 
  let completed;
  let acuerdo;

  docs.map((el) => {
    el.id === item.id && (seconds = el.duration);
    el.id === item.id && (completed = el.completed);
    el.id === item.id && (acuerdo = el.acuerdo);
  });


const hora = new Date(seconds).toLocaleTimeString("es-CL")

let date = new Date(seconds).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
}); 




  return (
    <div className="col">
        {currentUser && (
      <div className="card shadow-sm">
        <div
          onClick={() => handleState(item)}
          style={{
            height: "180px",
            backgroundImage: `url(${item.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
          className="w-100 mt-4"
        />
       
        <div className="card-body p-4">
          <p className="h5">
            <span className="text-secondary">KL </span> {item.email?.slice(0, -10)}
          </p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
              <span className="text-secondary">cliente</span> {item.categorie}
            </h5>
          </div>
          <div>
            <p>{date}, {hora.slice(0, -3)}</p>
          </div>
          <p className="card-text">{item?.description?.slice(0, 20)}...</p>
          <div className="d-flex justify-content-between align-item-center">
           
              <Button className={completed ? "btn btn-primary w-100" 
                                           : acuerdo 
                                           ? "btn btn-success w-100" 
                                           : "btn btn-danger w-100"}
                      onClick={() => bidAuction(item.id)}>

                {completed ? "Completado" : acuerdo ? 'Sin Completar ✓' : 'Sin Completar ✘'}
              </Button>
          
          </div>
        </div>
      
      </div>
        )}
    </div>
  );
};
