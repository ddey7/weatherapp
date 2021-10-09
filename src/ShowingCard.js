import React from "react";
import ico from "./icons/ico.png";

const ShowingCard = ({ data }) => {
  const { temp, humidity, pressure, mood, name, country, sunset, speed } = data;

  // converting time seconds into hours
  let date = new Date(sunset * 1000);
  let sunsetTime = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header h5 text-uppercase">
          {name},{country}
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <h5 className="h1">{temp}&deg;</h5>
              <p className="card-text">{mood}</p>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col">
              <img src={ico} />
              <h6 className="">{sunsetTime}PM</h6>
              <p className="">Sunset</p>
            </div>

            <div className="col">
              <i className="fas fa-sun"></i>
              <h6 className="">{humidity}</h6>
              <p className="">Humidity</p>
            </div>

            <div className="col">
              <i className="fas fa-cloud-rain"></i>
              <h6 className="">{pressure}</h6>
              <p className="">Pressure</p>
            </div>

            <div className="col">
              <i className="fas fa-wind"></i>
              <h6 className="">{speed}</h6>
              <p className="">Speed</p>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ShowingCard;
