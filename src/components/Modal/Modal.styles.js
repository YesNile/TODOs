import styled from 'styled-components';
export const Backdrop = styled.div`
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

export const ModalWrapper = styled.div`
  width: 500px;
  height: 350px;
  background: #39692e;
  border: 1px solid #112f00;;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 90%;
    height: 50%;
    gap: 30px;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 400;

  @media only screen and (max-width: 990px) {
    width: 70%;
  }
`;

export const ModalButton = styled.button`
  background-color: #112f00;
  width: 168px;
  height: 31px;
  padding: 6px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  color: white;
  font-weight: 800;
  line-height: 90%;

  @media only screen and (max-width: 990px) {
    width: 20%;
    margin-top: 20px;
    font-size: 10px;
  }
`;
