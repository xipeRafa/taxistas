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

  const [fecha, setFecha] = useState();
  const [arr, setArr] = useState([]);

  let l = arr.filter((el) => el).length;

  const onDate = (fecha) => {
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

  const handleMail = (e) => {
    setMail(e.target.value);
    setArrRadio([]);
  };

  const [arr2, setArr2] = useState([]);

  const [n, setN] = useState();

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

  const [arrRadio, setArrRadio] = useState([]);

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

  useEffect(() => {
    for (let index = 0; index < arrFilter.length; index++) {
      const element = db.filter((el) => el.categorie !== arrFilter[index]);
      db = element;
    }
    setArrRadio(db);
  }, [arrFilter, oxxo, otro, pagoEnEfectivo]);

  /* ===================================== Clientes Filter END ==================== */

  /* ===================================== last 24 hours ==================== */
  /* let lastWeek  = Date.now()-86400000 * 7 */
  let lastDay = Date.now() - 86400000;
  let lastHour = Date.now() - 3600000;
  let lastMinute = Date.now() - 60000;

 
  const[min, setMin]=useState()

  const[f, setF]=useState(1)

  const handlerInputM = (e)=>{
    setF(e.target.value)
  }

  let r = 60000 * f

  useEffect(() => {
    const t2 = DBD.filter((el) => el !== undefined)
    .filter((el) => el.completed === false)
    .filter((el) => el.duration > lastMinute - r)

    let personasMap2 = t2.map(item=>{ return [item.email, item] })
    let personasMapArr2 = new Map(personasMap2)

      let unicos2 = [...personasMapArr2.values()]
      setMin(unicos2)
  }, [f])


  const handlerMinute =()=>{
    const t2 = DBD.filter((el) => el !== undefined)
    .filter((el) => el.completed === false)
    .filter((el) => el.duration > lastMinute - r)

    let personasMap2 = t2.map(item=>{ return [item.email, item] })
    let personasMapArr2 = new Map(personasMap2)

      let unicos2 = [...personasMapArr2.values()]
      setMin(unicos2)
      setD([])
      setH([])
  }

  const[d, setD]=useState()
  console.log(d)

  const handlerDay =()=>{
    const tt = DBD.filter((el) => el !== undefined)
    .filter((el) => el.completed === false)
    .filter((el) => el.duration > lastDay)

   let personasMap = tt.map(item=>{ return [item.email, item] })
   let personasMapArr = new Map(personasMap); // Pares de clave y valor
   
   let unicos = [...personasMapArr.values()]; // Conversión a un array
   setD(unicos)
   setMin([])
   setH([])
  }

  

  const [h, setH]=useState()

  const[hr, setHr]=useState(1)
console.log(hr)
  const handlerInputH = (e)=>{
    setHr(e.target.value)
  }

  let rr = 3600000 * hr

  useEffect(() => {
    const t1 = DBD.filter((el) => el !== undefined)
    .filter((el) => el.completed === false)
    .filter((el) => el.duration > lastHour - rr)

   let personasMap1 = t1.map(item=>{ return [item.email, item] })
   let personasMapArr1 = new Map(personasMap1); // Pares de clave y valor
   
   let unicos1 = [...personasMapArr1.values()]; // Conversión a un array
   setH(unicos1)
  }, [hr])
  
  const handlerHour =()=>{
    const t1 = DBD.filter((el) => el !== undefined)
    .filter((el) => el.completed === false)
    .filter((el) => el.duration > lastHour)

   let personasMap1 = t1.map(item=>{ return [item.email, item] })
   let personasMapArr1 = new Map(personasMap1); // Pares de clave y valor
   
   let unicos1 = [...personasMapArr1.values()]; // Conversión a un array
   setH(unicos1)
   setMin([])
   setD([])
  }



 
                    


                      

  /* ===================================== last 24 hours END ==================== */






  let arr3 = arr;

  if (n) {
    let nn = n.filter((el) => el !== false);
    arr3 = nn;
    if (arrRadio.length > 0) {
      arr3 = arrRadio.filter((el) => el !== false);
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
              <span className="p-1">{l}</span> viajes el dia: {today2} de todos los Taxistas
            </span>
            <span
              style={{ marginLeft: "50px" }}
              className={n?.length > 0 ? "" : "d-none"}
            >
              <span className="bg-danger p-1">
                {n?.filter((el) => el.completed === false).length}
              </span>{" "}
              viajes Sin Completar de {mail}
            </span>
          </div>
          <div className="col-1"></div>
          <div className={n?.length > 0 ? "d-none" : "col-3 text-center mb-4 me-5"}>
            <DatePicker
              selected={fecha}
              onChange={onDate}
              onFocus={dateFocus}
              locale="es"
              className="pickers mb-3 form-control mt-2 w-100 bg-secondary"
              dateFormat="dd 'de' MMMM 'de' yyyy"
            />
          </div>
          <div
            className={arr?.length > 0 ? "col-1 fs-2 row-back" : "d-none"}
            onClick={() => location.reload()}
          >
            🔙
          </div>

          <div className="col-3 text-center">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleMail}
                value={mail}
                className={
                  arr.length > 0 ? "w-100 form-control mt-2" : "d-none"
                }
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
        </div>
      )}

{/* =================================================================================================================================================================================================================================== */}
{currentUser && (
      <div 
      className="d-flex flex-row justify-content-evenly p-4"> 

        <input type="button" 
                className={arr?.length > 0 ? "d-none" : "btn btn-primary"} 
                value='Ultimo Minuto' onClick={handlerMinute}/>

        <input type="button" 
                className={arr?.length > 0 ? "d-none" : "btn btn-primary"} 
                value='Ultima Hora' onClick={handlerHour}/>

        <input type="button" 
                className={arr?.length > 0 ? "d-none" : "btn btn-primary"} 
                value='Ultimas 24 Horas' onClick={handlerDay}/>
      </div>
)}

      <div className={arr?.length > 0 ? "d-none" : min?.length > 0 ? 'p-1 mb-3':  "d-none"}>
        <h4 className='p-1 bg-secondary text-white'>
          Taxistas con Viajes sin Completar desde el Ultimo Minuto +
          <input type="number" className="mx-5" onChange={handlerInputM} value={f}/>
        </h4>

        {
          <div className="p-3 text-center mb-3">
            {min?.map((doc) => {
                return (
                  <span className="border border-danger mx-2 p-2 bg-white">
                    {doc.email.slice(0, -10)}
                  </span>
                );
              })}
          </div>
        }
      </div>


      <div className={arr?.length > 0 ? "d-none" : h?.length > 0 ? 'p-1 mb-3':  "d-none"}>
        <h4 className='p-1 bg-secondary text-white'>
          Taxistas con Viajes sin Completar de la Ultima Hora +
          <input type="number" className="mx-5" onChange={handlerInputH} value={hr}/>
        </h4>
        

        {
          <div className="p-3 text-center mb-3">
            {
                h?.map((doc) => {
                  return(
                    <span className="border border-danger mx-2 p-2 bg-white">
                      {doc.email.slice(0, -10)}
                    </span>
                  )
                }) 
            }
          </div>
        }
        
      </div>


      <div className={arr?.length > 0 ? "d-none" : d?.length > 0 ? 'p-1 mb-3':  "d-none"}>
        <h4 className='p-1 bg-secondary text-white'>
          Taxistas con viajes sin Completar de las Ultimas 24 Horas
        </h4>

        {
          <div className="p-3 text-center mb-3">
            {
                d?.map((doc) => {
                  return(
                    <span className="border border-danger mx-2 p-2 bg-white">
                      {doc.email.slice(0, -10)}
                    </span>
                  )
                }) 
            }
          </div>
        }
        
      </div>
      {currentUser && (
        <div className={arr?.length > 0 ? "d-none" : 'p-1 mb-3 mt-5'}>
          <input type="text" placeholder='Codigo de Taller:' className='form-control w-25'/>
        </div>
      )}

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
