const TestBlock = (props) => {
  return (
    <div className="testblock-container">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>Spręsti</button>
      <button>Daugiau</button>
    </div>
  );
};

export default TestBlock;
