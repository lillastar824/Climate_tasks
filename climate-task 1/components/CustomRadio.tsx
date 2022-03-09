function CustomRadio(props: any) {
  return (
    <div className="radio-main">
      <label>
        <input type="radio" {...props} />
        {props.label}
      </label>
    </div>
  );
}

export default CustomRadio;
