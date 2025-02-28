const Student = ({ name, id, dispatch, isHere }) => {
  return (
    <div>
      <span
        onClick={() => {
          dispatch({ type: "line", payload: { id } });
        }}
        style={{ textDecorationLine: isHere ? "none" : "line-through" }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "remove", payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Student;
