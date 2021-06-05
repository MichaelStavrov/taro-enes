import s from "./InputText.module.css";
import cn from "classnames";
import { useField } from "formik";
import { useState } from "react";

export function InputText({ label, ...props }) {
  const [inFocus, setInFocus] = useState(false);

  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label className={s.label} htmlFor={props.id || props.name}>{label}</label>
      <input
        className={cn(s.input, {
          [s.inFocus]: inFocus,
          [s.invalid]: meta.error !== undefined
        })}
        {...field}
        {...props}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
      />
      
      {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
    </>
  );
}
