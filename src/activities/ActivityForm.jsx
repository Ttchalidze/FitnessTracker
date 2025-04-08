export default function ActivityForm() {
  const {
    mutate: add,
    loadin,
    error,
  } = useMutation("POST", "/activities", ["activities"]);
  const addactivity = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    add({ name, description });
  };
  return (
    <>
      <h2>add new activity</h2>
      <form action={addactivity}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Desctiption
          <lable type="text" name="description" />
        </label>
        <button>{loading ? "adding . . . !" : "Add Activit"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}
