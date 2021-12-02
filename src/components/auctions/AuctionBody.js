import React, { useContext, useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { AuctionCard } from "./AuctionCard";
import { ProgressBar } from "./ProgressBar";
import { FilterContext } from "../../context/FilterContext";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ItemSelected from "./ItemSelected";
import Filters from "./Filters";

import "./picker.css";
import es from "date-fns/locale/es";
import Categories from "../filters/Categories";
registerLocale("es", es);

export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { DB } = useContext(FilterContext);

  const [itemState, setItemState] = useState();

  const handleState = (a) => {
    setItemState(a);
  };

  let admin = currentUser ? currentUser.email : false;

  let DBD;
  if (
    admin === "superadmin@gmail.com" ||
    "superadmin2@gmail.com" ||
    "superadmin3@gmail.com"
  ) {
    DBD = DB.sort((o1, o2) =>
      o1.completed === o2.completed ? 0 : o2.completed ? -1 : 1
    );
  } else {
    DBD = [];
  }

  /* ===================================== filter Date ==================== */
  const dateFocus = () => {
    setArr([]);
  };

  const [today2, setToday2] = useState();

  const [fecha, setFecha] = useState(Date.now());
  console.log(fecha);
  const [arr, setArr] = useState([]);
  console.log(arr);

  let l = arr.filter((el) => el).length;

  const onChange = (fecha) => {
    setFecha(fecha);

    let today = fecha?.getTime();
    let tomorrow = today + 86400000;

    let today2 = new Date(today).toLocaleDateString("es-CL", {
      weekday: "long", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric" // 2-digit
    });

    setToday2(today2);

    let ss = DB;

    let a = ss.map((el, i) => {
      if (el.duration > today && el.duration < tomorrow) {
        return el;
      }
    });
    setArr(a);
  };

  /* ===================================== filter Date END==================== */

  /* ===================================== filter Mail ==================== */

  const [mail, setMail] = useState();
  console.log(mail);

  const handleMail = (e) => {
    setMail(e.target.value);
    setArrRadio([]);
  };

  const [arr2, setArr2] = useState([]);

  const [n, setN] = useState();
  console.log(n);

  const handleSubmit = (e) => {
    e.preventDefault();

    setArr2(mail);

    let sss = arr
      .filter((el) => el !== undefined)
      .map((el) => el.email === mail + "@gmail.com" && el);

    setN(sss);
  };

  /* ===================================== filter Mail END==================== */

  /* ===================================== Radio Filter ==================== */
  const [radio, setRadio] = useState();
  console.log(radio);

  const [arrRadio, setArrRadio] = useState([]);
  console.log(arrRadio);

  const handlerRadio = (v) => {
    setRadio(v);
    setArrRadio([]);
    const toRadio = n?.filter((el) => el !== false);
    let r = toRadio;

    if (radio === "completados") {
      r = toRadio.filter((el) => el.completed !== true);
      setArrRadio(r);
    } else {
      r = toRadio.filter((el) => el.completed !== false);
      setArrRadio(r);
    }
  };
  /* ===================================== Radio Filter END ==================== */

  /* ===================================== Clientes Filter ==================== */

  let db = n
    ?.sort((o1, o2) => o1.duration - o2.duration) //last to near
    .sort((o1, o2) =>
      o1.completed === o2.completed ? 0 : o2.completed ? -1 : 1
    );

  const [oxxo, setoxxo] = useState(true);
  const [otro, setotro] = useState(true);
  const [pagoEnEfectivo, setPagoEnEfectivo] = useState(true);

  const handleoxxo = (e) => {
    setoxxo(!oxxo);
    oxxo
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const handleotro = (e) => {
    setotro(!otro);
    otro
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const handleEfectivo = (e) => {
    setPagoEnEfectivo(!pagoEnEfectivo);
    pagoEnEfectivo
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const [arrFilter, setArrFilter] = useState([]);

  function removeItemFromArr(arrFilter, item) {
    let index = arrFilter.indexOf(item);
    if (index > -1) {
      arrFilter.splice(index, 1);
    }
  }
  console.log("Array-false:", arrFilter);

  useEffect(() => {
    for (let index = 0; index < arrFilter.length; index++) {
      const element = db.filter((el) => el.categorie !== arrFilter[index]);
      db = element;
      console.log("for:", db);
    }
    setArrRadio(db);
  }, [arrFilter, oxxo, otro, pagoEnEfectivo]);

  /* ===================================== Clientes Filter END ==================== */

  let arr3 = arr;

  if (n) {
    let nn = n.filter((el) => el !== false);
    arr3 = nn;
    if (arrRadio.length > 0) {
      arr3 = arrRadio;
    }
  } else {
    if (arr) {
      arr3 = arr
        .sort((o1, o2) => o1.duration - o2.duration) //last to near
        .sort((o1, o2) =>
          o1.completed === o2.completed ? 0 : o2.completed ? -1 : 1
        );
    }
  }

  let arr4 = DBD;

  if (arr.length > 0) {
    arr4 = arr3;
  }

  return (
    <div className="container-fluid">
      {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

      <div
        style={{ zIndex: "9999999" }}
        className="text-center w-50 position-fixed top-10 start-50 translate-middle"
      >
        {globalMsg && <Alert variant="danger">{globalMsg}</Alert>}
      </div>
      {admin && (
      <div className="row bg-secondary pt-4 pb-3">
        <div className="text-white bg-primary mb-3 p-1">
          <span style={{ marginLeft: "20px" }}>
            <span className="p-1">{l}</span> viajes el dia: {today2}
          </span>
          <span
            style={{ marginLeft: "50px" }}
            className={n?.length > 0 ? "" : "d-none"}
          >
            <span className="bg-danger p-1">
              {n?.filter((el) => el.completed === false).length}
            </span>{" "}
            viajes Sin Completar de {mail + "@gmail.com"} de {n?.length} en
            Total
          </span>
        </div>
        <div className="col-1"></div>
        <div className={n?.length > 0 ? "d-none" : "col-3 text-center mb-4"}>
          <DatePicker
            selected={fecha}
            onChange={onChange}
            onFocus={dateFocus}
            locale="es"
            className="pickers mb-3 form-control mt-2 w-100 bg-secondary"
            dateFormat="dd 'de' MMMM 'de' yyyy"
          />
        </div>
        <div className={n?.length > 0 ? "col-1 fs-2 row-back" : "d-none"}
             onClick={() => location.reload()}>🔙</div>

        <div className="col-3 text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleMail}
              value={mail}
              className={arr.length > 0 ? "w-100 form-control mt-2" : "d-none"}
              style={{ width: "0" }}
              placeholder="Filtrar por Correo"
            />
          </form>
        </div>
        <div className="col-1"></div>
        <div className={arr?.length > 0 ? "col-3 mt-0 fr" : "d-none"}>
          <div
            className={n?.length > 0 ? "w-50" : "d-none"}
            onChange={(e) => handlerRadio(e.target.value)}
          >
            <input
              type="button"
              className="text-white btn btn-secondary"
              name="drone"
              value="Todos"
              onClick={() => setArrRadio([])}
            />

            <label className="btn text-white btn-secondary">
              <input
                type="radio"
                value="completados"
                name="drone"
                className="d-none"
              />
              Completados
            </label>
            <label className="btn text-white btn-secondary">
              <input
                type="radio"
                value="nocompletados"
                name="drone"
                className="d-none"
                for="chackbox2"
              />
              No Completados
            </label>
          </div>
        </div>
        <div className={n?.length > 0 ? "col-3" : "d-none"}>
          <div className="w-75 mt-0">
            <label className="text-white mb-3">
              <input
                type="checkbox"
                className="m-1"
                value="oxxo"
                onChange={(e) => handleoxxo(e)}
                checked={oxxo}
              />
              OXXO
            </label>
            <br />
            <label className="text-white mb-3">
              <input
                type="checkbox"
                className="m-1"
                value="otro"
                onChange={(e) => handleotro(e)}
                checked={otro}
              />
              Otro
            </label>
            <br />
            <label className="text-white">
              <input
                type="checkbox"
                className="m-1"
                value="pago en efectivo"
                onChange={(e) => handleEfectivo(e)}
                checked={pagoEnEfectivo}
              />
              Pagos en Efectivo
            </label>
          </div>
        </div>
      </div>)}

      {DB && (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ">
          {currentUser && (
            <div className={arr.length > 0 && "d-none"}>
              <Filters />
            </div>
          )}
          {arr4
            .filter((el) => el !== undefined)
            .map((doc) => {
              return (
                <AuctionCard
                  item={doc}
                  key={doc.id}
                  handleState={handleState}
                />
              );
            })}
        </div>
      )}

      <ItemSelected itemState={itemState} />
    </div>
  );
};
