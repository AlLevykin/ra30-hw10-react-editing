import React from "react";
import {nanoid} from "nanoid";

const ServiceList = (props) => {

  const items = [
    {
      id: nanoid(),
      name: "Замена стекла",
      price: 22.50
    },
    {
      id: nanoid(),
      name: "Замена материнской платы",
      price: 159.99
    }
  ];

  return (
    (items.length > 0) ? 
      <h3>ServiceList</h3>
    :
      <></>
    );
  }

export default ServiceList;