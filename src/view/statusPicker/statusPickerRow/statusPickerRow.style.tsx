import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { CiTrash } from "react-icons/ci";

interface ColorOptionProps {
    $isSelected: boolean;
}

export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 4px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(17, 164, 255, 0.1);
  }
`;

export const TagGroup = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ColorButtonWrapper = styled.div`
    position: relative;
`;

export const ColorButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  padding: 2px;
  background-color: white;
  border: 1px solid #ddd;
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background-color: ${props => props.color};
  }
`;

export const DeleteButton = styled(CiTrash)`
  box-sizing: border-box; 
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 22px;
  height: 22px;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ColorDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #11A4FF;
  border-radius: 4px;
  padding: 8px;
  min-width: 150px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ColorOption = styled.div<ColorOptionProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  cursor: pointer;
  background-color: ${props => props.$isSelected ? 'rgba(17, 164, 255, 0.1)' : 'transparent'};
  
  &:hover {
    background-color: rgba(17, 164, 255, 0.1);
  }
`;

export const ColorContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorCheckmark = styled(FaCheck)`
  color: #666;
  margin-left: 8px;
`;

export const ColorSquare = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  padding: 2px;
  background-color: white;
  border: 1px solid #ddd;
  margin-right: 8px;
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: ${props => props.color};
  }
`;

export const ColorLabel = styled.span`
  color: #333;
  font-size: 12px;
`;