import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  fontSize?: number;
}

const Button = ({ children, disabled, onClick, fontSize }: Props) => (
  <Container
    onClick={(event) => {
      event.preventDefault();
      if (!disabled && onClick) onClick(event);
      return false;
    }}
    fontSize={fontSize}
    disabled={disabled}
    type="submit"
  >
    {children}
  </Container>
);

interface ContainerProps {
  readonly fontSize?: number;
}

const Container = styled.button<ContainerProps>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 16px 24px;
  border-radius: 4px;
  color: var(--primary-300);
  background-color: ${(props) =>
    props.disabled ? 'var(--grey-300)' : 'var(--secondary-600)'};
  font-size: ${(props) => props.fontSize || 16}px;
  transition: all 0.2s ease-out;
`;

export default Button;
