import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
} from "./NewVideo.styled";

const NewVideo = () => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    video: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descricao: "",
    });
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descricao: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>ADICIONAR NUEVO VIDEO</FormTitle>
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
        placeholder="Categoria"
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
        placeholder="URL del Vídeo"
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
      <Button type="submit">Guardar</Button>
      <Button type="button" onClick={handleReset}>
        Limpar
      </Button>
    </FormContainer>
  );
};

export default NewVideo;
