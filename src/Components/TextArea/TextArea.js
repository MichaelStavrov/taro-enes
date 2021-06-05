import { useField } from "formik";
import { useState } from "react";
import s from "./TextArea.module.css";
import cn from "classnames";


export function TextArea({ label, ...props }) {
  const [inFocus, setInFocus] = useState(false);
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={cn(s.textarea, {
          [s.inFocus]: inFocus
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
