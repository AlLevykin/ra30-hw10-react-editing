import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Trash, Pen, MusicNoteBeamed} from "react-bootstrap-icons";
import {removeService} from "../../actions/actionCreators";

const ServiceList = () => {

  const items = useSelector(state => state.serviceList);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  }

  const handleEdit = ({id,name,price}) => {
    console.log(`${id} ${name} ${price}`);
  }

  return items.length > 0 ? (
    <ul className="list-group list-group-flush">
      {items.map(item => (
        <li className="list-group-item" key={item.id}>
          <span>
            {item.name} {item.price}
          </span>
          <button type="button" className="btn btn-success ms-3" onClick={() => handleEdit(item)}>
            <Pen />
          </button>
          <button type="button" className="btn btn-danger ms-3" onClick={() => handleRemove(item.id)}>
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};

export default ServiceList;
