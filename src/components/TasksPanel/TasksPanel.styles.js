import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 650px;
  gap: 30px;
  min-height: 518px;
  background: #5c8f50;
  padding-bottom: 50px;

  @media only screen and (max-width: 990px) {
    width: 90%;
    padding: 20px;
    height: 70%;
    display: flex;
  }
`;

export const Title = styled.h3`
  color: #112f00;
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  line-height: 90%;


  @media only screen and (max-width: 990px) {
    font-size: 24px;
  }
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  background-color: #112f00;
  width: 168px;
  height: 40px;
  padding: 6px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #f8f8f8;
  font-weight: 600;
  line-height: 90%;

`;

export const DeleteConfirm = styled.div`
  height: 25%;
  width: 25%;
  background-color: #39692e;
  border: #112f00;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ConfirmText = styled.span`
  padding-left: 10px;
  color: white;
  font-weight: 400;
  font-size: 20px;
`;

export const ConfirmButton = styled.button`
  background-color: #112f00;
  width: 90px;
  height: 31px;
  padding: 6px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-weight: 800;
  line-height: 90%;
`;

export const ConfirmButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const DeleteConfirmBack = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
`;
