const useConfirm = (message = "", callback, rejection) => {
  if (!callback || typeof callback !== "function") {
    return;
  }
  if (rejection && typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

export const UseConfirmApp = () => {
  const deleteFunction = () => {
    console.log("delete the world");
  };
  const rejectFunction = () => {
    console.log("reject to delete");
  };
  const confirmDelete = useConfirm(
    "Are u sure?",
    deleteFunction,
    rejectFunction
  );
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={confirmDelete}>For message</button>
    </div>
  );
};
