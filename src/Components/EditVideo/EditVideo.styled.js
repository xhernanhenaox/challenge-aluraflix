import styled from "styled-components";

// Overlay para el fondo oscuro y el efecto flotante
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // Fondo oscuro y translúcido
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // Asegura que esté por encima de otros elementos
`;

// Contenedor del formulario
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
  position: relative;
  z-index: 10000; // Asegura que el formulario esté encima del overlay
  opacity: 1; // Añadido para evitar cualquier parpadeo
  transition: opacity 0.3s ease-in-out; // Transición suave al cargar el formulario
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryHover};
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.color};
`;
