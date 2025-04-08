import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");
  if (loading || !activities) return <p>Loading!</p>;
  if (error) return <p>Not Today!</p>;
  return (
    <ul>
      {activities.map((activitiy) => (
        <ActivityListItem Key={activitiy.id} activitiy={activitiy} />
      ))}
    </ul>
  );
}
function ActivityListItem({ activitiy }) {
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + activitiy.id, ["acitivities"]);
}
return (
  <li>
    <p>{activitiy.name}</p>
    {token && (
      <button onClick={() => deleteActivity()}>
        {loading ? "Deleting" : error ? error : "Delete"}
      </button>
    )}
  </li>
);
