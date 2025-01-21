import React, { useState, useEffect } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import { FormContainer, Input, Textarea, Button, FormTitle, Overlay } from "./EditVideo.styled";

const EditVideo = ({ videoToEdit, closeEditMode }) => {
  const { updateVideo } = useVideoContext();

  const [formData, setFormData] = useState({
    titulo: videoToEdit.title,
    categoria: videoToEdit.category,
    img: videoToEdit.img,
    video: videoToEdit.videoUrl,
    descricao: videoToEdit.description,
  });

  useEffect(() => {
    setFormData({
      titulo: videoToEdit.title,
      categoria: videoToEdit.category,
      img: videoToEdit.img,
      video: videoToEdit.videoUrl,
      descricao: videoToEdit.description,
    });
  }, [videoToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo(videoToEdit.id, formData);
    closeEditMode();
  };

  const handleReset = () => {
    setFormData({
      titulo: videoToEdit.title,
      categoria: videoToEdit.category,
      img: videoToEdit.img,
      video: videoToEdit.videoUrl,
      descricao: videoToEdit.description,
    });
  };

  return (
    
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>EDITAR CARD</FormTitle>
        <Input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={formData.categoria}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="img"
          placeholder="URL de la Imagen"
          value={formData.img}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="video"
          placeholder="URL del Video"
          value={formData.video}
          onChange={handleChange}
          required
        />
        <Textarea
          name="descricao"
          placeholder="Descripción"
          value={formData.descricao}
          onChange={handleChange}
          required
        />
        <Button type="submit">Actualizar</Button>
        <Button type="button" onClick={handleReset}>
          Limpiar
        </Button>
        <Button type="button" onClick={closeEditMode}>
          Cancelar
        </Button>
      </FormContainer>
    
  );
};

export default EditVideo;
