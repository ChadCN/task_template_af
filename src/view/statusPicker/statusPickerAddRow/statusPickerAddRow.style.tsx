import styled from 'styled-components';
import { MdAdd } from "react-icons/md";

interface IconButtonProps {
    $isCreate?: boolean;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px;
`;

export const AddIcon = styled(MdAdd)`
  position: absolute;
  left: 5px;
  color: black;
  pointer-events: none;
`;

export const Input = styled.input`
  box-sizing: border-box; 
  width: 100%;
  padding: 8px 8px 8px 25px;
  border: 1px solid transparent;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #11A4FF;
  }
  
  &::placeholder {
    color: #666;
  }
`;

export const ButtonGroup = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button<IconButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  padding: 4px;
  
  &:hover {
    color: ${props => props.$isCreate ? '#52c41a' : '#dc3545'};
  }
`;