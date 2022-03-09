function Slide({ children }: any) {
  return (
    <div className="main-slide">
      <div className="slide-title">
        Which of the below statements about electricity is not true
      </div>
      {children}
    </div>
  );
}

export default Slide;
