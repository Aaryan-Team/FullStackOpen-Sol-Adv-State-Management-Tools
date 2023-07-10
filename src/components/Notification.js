import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector(({ anecdote, noti }) => {
    if (noti) {
      return noti;
    }
  });

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <>
      {notification && (
        <div style={style}>You voted/added "{notification}"</div>
      )}
    </>
  );
};

export default Notification;
