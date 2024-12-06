import styled from 'styled-components';

interface TagContainerProps {
  $bgColor: string;
}

interface ColorSquareProps {
  $color: string;
}

interface LabelProps {
  $color: string;
}

export const TagContainer = styled.div<TagContainerProps>`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: ${props => `${props.$bgColor}20`};
`;

export const ColorSquare = styled.div<ColorSquareProps>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${props => props.$color};
  flex-shrink: 0;
`;

export const Label = styled.label<LabelProps>`
  color: ${props => {
    const color = props.$color.startsWith('#') ? props.$color : `#${props.$color}`;
    return `color-mix(in srgb, ${color} 50%, black)`;
  }};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;