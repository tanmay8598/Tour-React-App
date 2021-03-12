import React, { useState } from "react";

const Card = (props) => {
  const [read, setRead] = useState(false);

  const handleReadMore = () => {
    setRead(!read);
  };

  return (
    <div className="destination">
      {props.pack.map((tour) => {
        const { id, name, image, price, info } = tour;

        return (
          <div className="tour-card">
            <div>
              <img class="card-img-top img-1" src={image} alt="" />
            </div>

            <div className="info">
              <div className="content">
                <div className="tour-detail">
                  <h4>{name}</h4>
                  <p>
                    {read ? info : `${info.substring(0, 200)}...`}
                    <button className="read-btn" onClick={handleReadMore}>
                      {read ? "Show Less" : "Read More"}
                    </button>
                  </p>
                </div>
                <h5 className="tour-price">{"$" + price}</h5>
              </div>

              <div className="remove-btn">
                <button onClick={() => props.removeTour(id)}>
                  Not interested
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
