import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addService, changeServiceField} from "../../actions/actionCreators";

const AddServiceForm = () => {

  const item = useSelector(state => state.serviceAdd);

  const dispatch = useDispatch();

  const handleChange = event => {
    const name = event.target.name;
    const value = (event.target.valueAsNumber) ? event.target.valueAsNumber : event.target.value;
    dispatch(changeServiceField(name,value));
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addService(item.name,item.price));
    dispatch(changeServiceField("name", ""));
    dispatch(changeServiceField("price", 0));
  }

  return (
    <form className="py-3" onSubmit={handleSubmit}>
      <div className="mb-3">
       <input className="form-control" type="text" name="name" value={item.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <input className="form-control" type="number" name="price" value={item.price} onChange={handleChange} min="0" step="0.01"/>
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );

}

export default AddServiceForm;

