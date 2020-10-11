import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  background: #5c5c5c;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  resize: none;
  border-radius: 10px;

  ::placeholder {
    color: #bbb;
  }
`;

export const Configs = styled.div`
  height: 40px;
  background: #48c9b0;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Player = styled.button`
  margin-left: 20px;
  color: #fff;
`;
