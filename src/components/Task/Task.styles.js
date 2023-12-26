import styled from 'styled-components';

export const TaskItem = styled.li`
  width: 550px;
  height: 40px;
  border: #1d4406;
  border-radius: 5px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #112f00;
`;

export const TaskItems = styled.div`
  display: flex;
  gap: 10px;
`;

export const TaskText = styled.span`
  padding-left: 10px;
  color: white;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const TaskButtons = styled.div`
  display: flex;
`;

export const TaskButton = styled.button`
  border: none;
  background: none;
  display: flex;
  color: #aac7a0;
  cursor: pointer;
`;

