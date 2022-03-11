function Slide({ children, question }: any) {
  return (
    <div className="main-slide">
      <div className="slide-title">{question}</div>
      {children}
    </div>
  );
}

export default Slide;
