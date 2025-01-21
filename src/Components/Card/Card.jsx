import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
} from "./Card.styled";
import { useVideoContext } from "../../Contexts/VideoContext";
import EditVideo from "../EditVideo/EditVideo";
import { useState } from "react";  // Importar useState para manejar el estado del modo de edición

const Card = ({ video }) => {
  const { deleteVideo, updateVideo } = useVideoContext();
  const [isEditing, setIsEditing] = useState(false);  // Estado para controlar el modo de edición

  const handleEdit = () => {
    setIsEditing(true);  // Activar el modo de edición al hacer clic en el icono de editar
  };

  const closeEditMode = () => {
    setIsEditing(false);  // Desactivar el modo de edición cuando el formulario se cierre
  };

  return (
    <CardContainer>
      <CardImage src={video.img} alt={video.title} />
      {isEditing ? (
        <EditVideo videoToEdit={video} closeEditMode={closeEditMode} />
      ) : (
        <CardActions>
          <IconButton onClick={() => deleteVideo(video.id)}>
            <FaTrashAlt />
          </IconButton>

          <IconButton onClick={handleEdit}>
            <FaEdit />
          </IconButton>
        </CardActions>
      )}
    </CardContainer>
  );
};

export default Card;
