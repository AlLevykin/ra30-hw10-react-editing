import React from "react";
import AddServiceForm from "../AddServiceForm";
import ServiceList from '../ServiceList';

export default function App() {
return (
<div className="container">
  <AddServiceForm />
  <ServiceList />
</div>
);
}
