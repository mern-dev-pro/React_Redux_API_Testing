import React, { FC, ChangeEvent, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

import { useSelector, actions, useDispatch } from '../store';
import useQuery from '../hooks/useQuery';
import useAPI from '../hooks/useAPI';

import './Welcome.scss';

const Welcome: FC = () => {
  const { getTasks } = useAPI();
  const dispatch = useDispatch();
  const { query, setQuery } = useQuery();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    if (!query.completed) return;

    toast(`You have completed task #${query.completed}`, { type: 'success' });
  }, [query]);

  useEffect(() => {
    if (tasks.length) return;

    getTasks().then((tasks) => {
      dispatch(actions.set({ tasks }));
    });
  }, [getTasks, dispatch, tasks]);

  return (
    <main className="Welcome">
      <h1>Welcome</h1>
      <p>To the Digital Renaissance code test. Please have a look at the README.md.</p>
      <p>If you installed everything correctly, you should see a list of 4 items below:</p>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? 'done' : ''}>
            {task.description}
            <Form.Check
              type="switch"
              id={`checkbox-${index}`}
              checked={task.done}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const update = tasks.slice();

                update[index] = {
                  ...task,
                  done: e.target.checked
                };

                dispatch(actions.set({ tasks: update }));

                if (update[index].done) setQuery({ completed: `${index + 1}` });
              }}
              label={
                task.done ? (
                  <b>
                    <i className="fas fa-check" />
                  </b>
                ) : (
                  'To do'
                )
              }
            />
          </li>
        ))}
      </ol>
      <p>
        Good luck!<i>- Luuk</i>
      </p>
    </main>
  );
};

export default Welcome;
