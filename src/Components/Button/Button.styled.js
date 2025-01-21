import styled from "styled-components";

export const StyledButton = styled.button`
  width: 11.26rem;
  height: 3.375rem;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.5rem;
  text-align: center;
  background-color: transparent;
  color:rgb(255, 255, 255);
  border: 0.125rem solidrgb(255, 0, 0);
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background:rgb(0, 0, 0);
    border: 0.125rem solidrgb(255, 0, 0);
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
