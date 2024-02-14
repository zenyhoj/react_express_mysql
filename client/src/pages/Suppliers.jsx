import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchAllSuppliers = async () => {
      //async function to make an API request
      try {
        const res = await axios.get("http://localhost:8800/suppliers");
        // console.log(res);
        setSuppliers(res.data); //fetch all data from the database
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllSuppliers(); //very important to fetch all suppliers
  }, []); //[] means will only run once
  return (
    <div>
      <h1>All Suppliers</h1>
      <div className="suppliers">
        {suppliers.map((supplier) => (
          <div className="supplier" key={supplier.id}>
            <h2>{supplier.company_name}</h2>
            <p>{supplier.address}</p>
            <p>{supplier.contact_number}</p>
            <p>{supplier.contact_person}</p>
            <p>{supplier.products}</p>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add Supplier</Link>
      </button>
    </div>
  );
};
