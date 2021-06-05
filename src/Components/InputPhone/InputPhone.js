import s from "./InputPhone.module.css";
import cn from "classnames";
import { useField } from "formik";
import { useState } from "react";

export function InputPhone({ label, ...props }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  const [inFocus, setInFocus] = useState(false);


  if (field.value.length < 4) {
    field.value = meta.initialValue;
  }

  if (field.value.length === 7) {
    field.value += ") ";
  }

  if (field.value.length === 8) {
    field.value = field.value.slice(0, 7);
  }

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={cn(s.input, {
          [s.inFocus]: inFocus,
        })}
        {...field}
        {...props}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
