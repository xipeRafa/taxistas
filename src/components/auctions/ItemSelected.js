import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

const ItemSelected = ({
  itemState = {
    title: "Inicia sesión",
    imgUrl:
      "https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"
  }
}) => {
  const { docs } = useFirestore("auctions");

  let title = itemState.title;

  let email = "";
  let seconds;

  docs.map((el) => {
    el.id === itemState.id && (email = el.email);

    el.id === itemState.id && (seconds = el.createdAt.seconds);
  });

  const hora = new Date(seconds * 1000).toLocaleTimeString(
    "es-CL"
  ); /* hora, min, sec */

  let date = new Date(seconds * 1000).toLocaleDateString("es-CL", {
    weekday: "long", // narrow, short
    year: "numeric", // 2-digit
    month: "short", // numeric, 2-digit, narrow, long
    day: "numeric" // 2-digit
  });

  return (
    <div className="m-5">
      <div
        className={
          itemState.completed
            ? "bg-primary text-white p-2 text-center"
            : "bg-danger text-white p-2 text-center"
        }
      >
        {itemState.completed ? "COMPLETADO" : "SIN COMPLETAR"}
      </div>
      <div className="card pb-0">
        <div
          style={{
            height: "400px",
            backgroundImage: `url(${itemState.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
          className="w-100 mb-4 mt-2"
        />

        {title !== "Inicia sesión" && (
          <div className="card-body">
            <p className="lead display-6 pl-2">
              <span className="text-secondary">KL: </span> {itemState.title}
            </p>
            <div className="d-flex jsutify-content-between align-item-center">
              <h5>
                <span className="text-secondary">KL: </span> {email}
              </h5>
            </div>
            <h5>
              <span className="text-secondary">Fecha: </span> {date}, {hora}
            </h5>
            <h5 className="card-text">
              <span className="text-secondary">Comentarios: </span>{" "}
              {itemState.description}
            </h5>
          </div>
        )}
      </div>
      <div
        className={
          itemState.completed
            ? "bg-primary text-white p-2 text-center"
            : "bg-danger text-white p-2 text-center"
        }
      >
        {itemState.completed ? "COMPLETADO" : "SIN COMPLETAR"}
      </div>
    </div>
  );
};

export default ItemSelected;
