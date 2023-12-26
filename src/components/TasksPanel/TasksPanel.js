import React, {useState} from 'react';
import {useQuery} from "react-query";
import {useTaskMutations} from "../../hooks/useMutations";
import {
    AddButton,
    ConfirmButton, ConfirmButtons,
    ConfirmText,
    DeleteConfirm,
    DeleteConfirmBack,
    Title,
    Wrapper
} from "./TasksPanel.styles";
import {Modal} from "../Modal/Modal";
import {TasksList} from "../TasksList/TasksList";
import {Alert} from "../Alert/Alert";

export const TasksPanel = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [taskIdToDelete, setTaskIdToDelete] = useState(null);

    const tasks = useQuery('tasks',
        () => JSON.parse(localStorage.getItem('tasks')) || []);

    const {
        addTaskMutation,
        deleteTaskMutation,
        updateTaskMutation
    } = useTaskMutations();

    const openModal = (task = null) => {
        setSelectedTask(task);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedTask(null);
        setModalOpen(false);
    };

    const handleAddTask = (newTask) => {
        addTaskMutation.mutate(newTask);
        closeModal();
    };

    const handleUpdateTask = (task) => {
        openModal(task);
    };

    const confirmDelete = (taskId) => {
        setTaskIdToDelete(taskId);
        setShowDeleteConfirmation(true);
    };

    const handleDeleteConfirmation = () => {
        deleteTaskMutation.mutate(taskIdToDelete);
        setShowDeleteConfirmation(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirmation(false);
    };

    return (
        <Wrapper>
            <Title>Todo list</Title>
            <AddButton onClick={() => openModal()}>Добавить задачу</AddButton>

            <TasksList tasks={tasks.data} onDelete={confirmDelete} onUpdate={handleUpdateTask}/>

            {modalOpen && (
                <Alert
                    modalOpen={modalOpen}
                    onSave={(title) => {
                        if (selectedTask) {
                            updateTaskMutation.mutate({ id: selectedTask.id, title });
                        } else {
                            handleAddTask({ title });
                        }
                    }}
                    closeModal={closeModal}
                />
            )}
            {showDeleteConfirmation && (
                <DeleteConfirmBack>
                    <DeleteConfirm>
                        <ConfirmText>Удалить?</ConfirmText>
                        <ConfirmButtons>
                            <ConfirmButton onClick={handleDeleteConfirmation}>Да</ConfirmButton>
                            <ConfirmButton onClick={handleCancelDelete}>Нет</ConfirmButton>
                        </ConfirmButtons>
                    </DeleteConfirm>
                </DeleteConfirmBack>
            )}
        </Wrapper>
    );
};