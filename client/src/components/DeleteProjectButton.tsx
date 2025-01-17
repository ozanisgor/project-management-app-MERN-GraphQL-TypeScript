import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function DeleteProjectButton({
  projectId,
}: {
  projectId: string | null | undefined;
}) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId ?? "" },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleDeleteProject = () => {
    deleteProject();
  };

  return (
    <div className="d-flex mt-5 ms-auto">
      <button
        className="btn btn-danger m-2 align-items-center d-flex"
        onClick={handleDeleteProject}
      >
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
