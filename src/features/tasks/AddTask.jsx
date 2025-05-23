import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function AddTask() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input.trim() !== '') {
            dispatch(addTask(input));
            setInput('');
        }
    };

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Nouvelle tâche"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="primary" onClick={handleAdd}>
                Ajouter
            </Button>
        </InputGroup>
    );
}
