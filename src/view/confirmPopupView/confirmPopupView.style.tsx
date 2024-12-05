import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
`;

export const PopupContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 24px;
  width: 400px;
`;

export const Title = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Message = styled.p`
  margin: 0 0 24px 0;
  color: #666;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  pointer-events: auto;
`;

export const ConfirmButton = styled(Button)`
  background-color: ${props => props.color || '#007bff'};
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const CancelButton = styled(Button)`
  background-color: white;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;
