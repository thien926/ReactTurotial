import React from "react";
import { useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const FormBuilderComponent = () => {
  const [formData, setFormData] = useState([]);

  const onSave = (data) => {
    console.log("Form saved:", data);
    setFormData(data);
  };
  
  return (
    <div className="container mt-5">
      <h2>React Form Builder 2 with Bootstrap 5</h2>
      <ReactFormBuilder
        saveUrl={"/save"} // URL to save form data
        // onLoad={setFormData} // Callback when form data is loaded
        onSave={onSave} // Callback when form is saved
      />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default FormBuilderComponent;
