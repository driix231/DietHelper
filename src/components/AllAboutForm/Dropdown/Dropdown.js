import React from 'react';
import { useFormContext } from 'react-hook-form'
import { ItemDropdownContainer, FormControl, Pragraph } from "./Dropdown.css";

export default function Dropdown({ Component = ItemDropdownContainer, options, name, label, ...rest }) {
    const { register } = useFormContext()
    return (
        <Component>
            <Pragraph id="label">{label}</Pragraph>
            <FormControl as="select" ref={register} name={name} inputProps={{ 'aria-label': 'age' }} {...rest}>
                {options.map(item => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </FormControl>
        </Component>
    );
}