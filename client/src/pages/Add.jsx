import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const [supplier, setSupplier] = useState({
    company_name: "",
    address: "",
    contact_number: "",
    contact_person: "",
    products: "",
  });

  const navigate = useNavigate(); //to go back to homepage /

  const handleChange = (e) => {
    setSupplier((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault(); //to not refresh the browser
    try {
      await axios.post("http://localhost:8800/add_suppliers", supplier);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(supplier);

  return (
    <div className="form">
      <h1>Add New Supplier</h1>
      <input
        type="text"
        placeholder="company name"
        onChange={handleChange}
        name="company_name"
      />
      <input
        type="text"
        placeholder="address"
        onChange={handleChange}
        name="address"
      />
      <input
        type="text"
        placeholder="contact number"
        onChange={handleChange}
        name="contact_number"
      />
      <input
        type="text"
        placeholder="contact person"
        onChange={handleChange}
        name="contact_person"
      />
      <input
        type="text"
        placeholder="products"
        onChange={handleChange}
        name="products"
      />

      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
