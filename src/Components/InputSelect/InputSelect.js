import { useField } from "formik";
import { useState } from "react";
import cn from 'classnames'
import s from "./InputSelect.module.css";
import arrow from "../../Assets/images/arrow.svg";

export function InputSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className={s.container}>
      <label className={s.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <div className={s.selectWrapper}>
        <div className={cn(s.arrowWrapper, {
          [s.arrowRotate]: isOpen
        })}>
          <img className={s.arrow} src={arrow} alt="arrow" />
        </div>
        <select className={cn(s.select, {
          [s.inFocus]: isOpen
        })} {...field} {...props} onClick={() => setIsopen(prev => !prev)} onBlur={() => setIsopen(false)} />
      </div>
      {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
    </div>
  );
}
