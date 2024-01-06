const jumbotron = (props) => {
    return (
      <div className="jumbotron min-h-96 bg-navy-blue items-center justify-center flex">
          <h1 className="text-6xl font-bold text-white">{props.message}</h1>
      </div>
    );
  };
  
  export default jumbotron;