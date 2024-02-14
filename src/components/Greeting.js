import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../Redux/greetings/greetingsSlice';

const GreetingsComponent = () => {
  const { greetings, loading, error } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <h1>Greetings</h1>
      {greetings && greetings.content && (
        <div>
          <p>{greetings.content}</p>
        </div>
      )}
    </div>
  );
};

export default GreetingsComponent;
