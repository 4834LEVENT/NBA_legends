import { useState } from "react";
import "./card.css";

const Card = ({ card }) => {
  const { img, name, statistics } = card;

  const [show, setShow] = useState(true);

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 card-container "
      onClick={() => setShow(!show)}
    >
      {show ? (
        <div className="card bg-white">
          <img src={img} className="card-img-top" alt="..." />

          <h5 className="card-title ">{name}</h5>
        </div>
      ) : (
        <div>
          <ul className="container-list bg-white p-4 rounded-2 mx-2">
            {statistics.map((statistic, i) => {
              return (
                <li key={i} className="p-3 text-center">
                  {statistic}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
