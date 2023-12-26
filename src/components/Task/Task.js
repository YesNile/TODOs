import React from 'react';
import {
    TaskButton,
    TaskButtons,
    TaskItem,
    TaskItems,
    TaskText
} from "./Task.styles";

export const Task = ({ task, onDelete, onUpdate }) => {
    return (
        <TaskItems>
            <TaskItem>
                <TaskText>
                    {task.title}
                </TaskText>
                <TaskButtons>
                    <TaskButton onClick={() => onDelete(task.id)}>
                        Удалить
                    </TaskButton>
                    <TaskButton onClick={() => onUpdate(task)}>
                        Изменить
                    </TaskButton>
                </TaskButtons>
            </TaskItem>
        </TaskItems>
    );
};

