import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './taskSlice';
import TaskItem from './TaskItem';
import { ButtonGroup, Button } from 'react-bootstrap';

function TaskList() {
    const dispatch = useDispatch();
    const { list, filter } = useSelector((state) => state.tasks);

    const filtered = list.filter(task =>
        filter === 'done' ? task.isDone :
            filter === 'notDone' ? !task.isDone :
                true
    );

    return (
        <div>
            <ButtonGroup className="mb-3">
                <Button variant="outline-dark" onClick={() => dispatch(setFilter('all'))}>Tous</Button>
                <Button variant="outline-success" onClick={() => dispatch(setFilter('done'))}>Effectués</Button>
                <Button variant="outline-warning" onClick={() => dispatch(setFilter('notDone'))}>Non effectués</Button>
            </ButtonGroup>
            {filtered.map(task => <TaskItem key={task.id} task={task} />)}
        </div>
    );
}

export default TaskList;
