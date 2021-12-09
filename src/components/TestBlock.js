const TestBlock = (props) => {
  return (
    <div className="testblock-container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default TestBlock;
