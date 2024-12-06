import styled from 'styled-components';
import { CiTrash } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { MdAdd } from "react-icons/md";

interface FormGroupProps {
  $hasError?: boolean;
}

interface InputProps {
  $hasError?: boolean;
}

interface StatusButtonProps {
  $showDropdown?: boolean;
}

interface TemplateIconButtonProps {
  $showEmojiPicker?: boolean;
}

interface TextAreaProps {
  $isEmpty?: boolean;
  $hasError?: boolean;
}

export const Container = styled.div`
  box-sizing: border-box; 
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  span {
    color: #adaeba;
  }
  strong {
    font-weight: bold;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TimeInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #666;
  font-size: 12px;
`;

export const ActivityLink = styled.a`
  color: #11A4FF;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
  text-align: right;
  &:hover {
    color: #0d8ae8;
  }
`;

export const IconDeleteButton = styled(CiTrash)`
  background-color: #fff;
  border: 1px solid #ddd;
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

export const SaveButton = styled(Button)`
  background-color: #11A4FF;
  color: white;
  
  &:hover {
    background-color: #0d8ae8;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: rgba(17, 164, 255, 0.1);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 900px;
  width: 90%;
`;


export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: ${props => props.$hasError ? '32px' : '5px'};
  position: relative;
`;

export const Label = styled.label`
  min-width: 120px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding-right: 80px;
  color: #666975;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 616px;
  display: flex;
  align-items: center;
`;

export const ClearButton = styled(LiaTimesSolid)`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 2px;
  
  &:hover {
    background-color: rgba(17, 164, 255, 0.1);
  }
`;

export const FakeInputButtonWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  pointer-events: none;
  font-size: 14px;
`;


export const Input = styled.input<InputProps>`
  box-sizing: border-box; 
  max-width: 616px;
  width: 100%;
  height: 32px;
  padding: 8px;
  padding-left: ${props => !props.value ? '26px' : '8px'};
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &::placeholder {
    color: #666;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#dc3545' : '#007bff'};   
  }
`;
// ${props => props.showDropdown ? '1' : '0'}
export const StatusButtonWrapper = styled.div`
  position: relative;
  width: 616px;
  /* flex: 1; */
  /* width: 100%; */
    /* display: flex; */
`;


export const StatusButton = styled(Button)<StatusButtonProps>`
  max-width: 616px;
  width: 100%;
  min-height: 32px;
  justify-content: start;
  background-color: white;
  border: 1px solid ${props => props.$showDropdown ? '#11A4FF;' : '#ddd'};
  border-radius: 4px;
  padding: 4px 8px;
  display: flex;
  flex-wrap: wrap;
  &:hover {
  background-color: rgba(17, 164, 255, 0.1);
  }
`;

export const StatusList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 4px;
  z-index: 1000;
  max-height: 300px;
  /* overflow-y: auto; */
`;

export const EmojiList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 4px;
  z-index: 1000;
  max-height: 300px;
  /* overflow-y: auto; */
`;

export const TemplateIconButton = styled(StatusButton)<TemplateIconButtonProps>`
  border: 1px solid ${props => props.$showEmojiPicker ? '#11A4FF;' : '#ddd'};
`;

export const TextArea = styled.textarea<TextAreaProps>`
  box-sizing: border-box; 
  max-width: 616px;
  width: 100%;
  min-height: 32px;
  padding: 6px 8px;
  padding-right: 32px;
  padding-left: ${props => props.$isEmpty ? '26px' : '8px'};
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  overflow: hidden;
  line-height: 20px;
  display: flex;
  align-items: center;
  height: ${props => props.value ? 'auto' : '32px'};
  font-size: 14px;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#dc3545' : '#007bff'};  
  }
`;

export const AddIcon = styled(MdAdd)`
  position: absolute;
  left: 8px;
  color: #666975;
  pointer-events: none;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #dc3545;
  font-size: 12px;
  position: absolute;
  left: 0;
  bottom: -28px;
  padding: 4px 8px;
  background-color: rgba(220, 53, 69, 0.1);
  border-radius: 4px;
  max-width: 616px;
`;