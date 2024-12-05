import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; 
import { CiTrash } from "react-icons/ci";

export const Container = styled.div`
  box-sizing: border-box; 
  padding: 40px;
`;

export const Header = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  span {
    color: #adaeba;
  }
  strong {
    font-weight: bold;
  }
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #11A4FF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0d8ae8;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 16px;
`;

export const ItemCount = styled.label`
  color: #000;
  font-weight: bold;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 240px; 
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  box-sizing: border-box; 
  padding: 8px 8px 8px 32px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  
  &:focus {
    outline: none;
    border-color: #666;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  border-top: 1px solid #ddd;
`;

export const Th = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 2px solid #ddd;
  
  &:nth-child(1) { // Checkbox
    width: 40px;
    text-align: center;
    border-right: 1px solid #ddd;
  }

  &:nth-child(2) { // Temple name
    width: 220px;
  }

  &:nth-child(3) { // Task icon 
    width: 100px;
  }

  &:nth-child(4) { // Description
    width: 20%;
  }

  &:last-child { 
    text-align: center;
    border-left: 1px solid #ddd;
  }
`;

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;

  &:nth-child(1) { // Checkbox
    text-align: center;
  }

  &:nth-child(6) { // Action
    width: 20px;
    padding-left: 10px;
  }
`;

export const Tr = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: rgba(17, 164, 255, 0.1);
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  width: 16px;
  height: 16px;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const StatusList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TdWithRightBorderLine = styled(Td)`
  border-right: 1px solid #ddd; 
  text-align: center;
`;

export const TdWithLeftBorderLine = styled(Td)`
  border-left: 1px solid #ddd; 
  text-align: center;
`;

export const DeleteButton = styled(CiTrash)`
  border-radius: 4px;
  width: 22px;
  height: 22px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(17, 164, 255, 0.1);
    cursor: pointer;
  }
`;


export const EmptyPlaceholder = styled.div`
  border: 1px dashed #ddd;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  min-height: 500px;
  height: 100%;
`;

export const EmptyTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const EmptyText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

export const CreateTemplateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;