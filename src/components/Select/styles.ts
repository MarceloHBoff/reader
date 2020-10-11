import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OutContainer = styled.div`
  background: transparent;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const DefaultOption = styled.div`
  background: #06816a;
  color: #fff;
  font-weight: bold;
  padding: 5px 30px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
`;

export const DefaultOptionIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 2px;
`;

export const Legend = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin: 0 30px;
  margin-right: 10px;
`;

export const Options = styled.div`
  background: #06816a;
  border-radius: 10px;

  position: absolute;
  top: 30px;
  left: 0px;

  z-index: 1;
`;

export const Option = styled.button`
  background: #06816a;
  color: #fff;
  font-weight: bold;
  padding: 5px 30px;

  :hover {
    background: #48c9b0;
  }

  :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
