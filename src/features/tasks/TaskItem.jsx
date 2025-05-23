import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTask } from './taskSlice';
import { Button, Form } from 'react-bootstrap';

export default function TaskItem({ task }) {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [desc, setDesc] = useState(task.description);

    const handleSave = () => {
        dispatch(editTask({ id: task.id, description: desc }));
        setEditMode(false);
    };

    return (
        <div className="d-flex justify-content-between align-items-center mb-2">
            <Form.Check
                type="checkbox"
                checked={task.isDone}
                onChange={() => dispatch(toggleDone(task.id))}
                label={
                    editMode ? (
                        <Form.Control
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    ) : (
                        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                            {task.description}
                        </span>
                    )
                }
            />
            <div>
                {editMode ? (
                    <Button variant="success" size="sm" onClick={handleSave}>
                        Sauvegarder
                    </Button>
                ) : (
                    <Button variant="secondary" size="sm" onClick={() => setEditMode(true)}>
                        Modifier
                    </Button>
                )}
            </div>
        </div>
    );
}
