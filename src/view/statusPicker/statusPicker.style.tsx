import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: '100%';
  background: white;
  border: 1px solid #11A4FF;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const CategoryLabel = styled.label`
  display: block;
  padding: 4px 15px;
  font-weight: 700;
  color: black;
  font-size: 12px;
`;

export const StatusGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: '8px';
  padding: 8px;
`;