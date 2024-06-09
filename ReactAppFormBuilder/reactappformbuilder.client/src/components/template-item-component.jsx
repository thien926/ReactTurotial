/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const TemplateItemComponent = ({ item, index }) => {
    return (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td><a href={`/form-builder/${item.id}`}>Edit</a><br /><a href={`/Answer/${item.id}`}>Answer</a></td>
        </tr>
    );
};

export default TemplateItemComponent;