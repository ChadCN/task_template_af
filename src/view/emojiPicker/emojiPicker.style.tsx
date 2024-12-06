import styled from 'styled-components';

interface TabProps {
  $isActive: boolean;
}

export const Container = styled.div`
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #11A4FF;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
  z-index: 1000;
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 0 8px;
`;

export const Tab = styled.button<TabProps>`
  padding: 8px 16px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.$isActive ? '#666' : '#666'};
  border-bottom: 3px solid ${props => props.$isActive ? '#666' : 'transparent'};
`;

export const SearchBar = styled.input`
  box-sizing: border-box; 
  width: calc(100% - 16px);
  margin: 8px;
  padding: 8px;
  border: none;
  border-bottom: 3px solid #ddd;
  
  &:focus {
    outline: none;
    border-bottom-color: #11A4FF;
  }
`;

export const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 4px;
  padding: 8px;
  max-height: 300px;
  overflow-y: auto;
`;

export const EmojiItem = styled.button`
  padding: 8px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  
  &:hover {
    background: #f8f9fa;
    border-radius: 4px;
  }
`;