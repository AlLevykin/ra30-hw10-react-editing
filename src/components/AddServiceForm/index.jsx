import React from "react";

const AddServiceForm = (props) => {

  return (
    <form className="py-3" onSubmit="">
      <div className="mb-3">
       <input className="form-control" type="text" name="name" />
      </div>
      <div className="mb-3">
        <input className="form-control" type="number" name="price" />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );

}

export default AddServiceForm;

