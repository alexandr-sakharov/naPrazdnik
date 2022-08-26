import React from 'react';

const Select = ({ name, values}) => {
    return (
        <select name={name}>
            {values.map(value => <option value={value.name}>{value.name}</option>)}
        </select>
    );
};

export default Select;
