// components/Header/index.jsx
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddCourse }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddCourse(name, description);
    setName('');
    setDescription('');
  }

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1 style={{textAlign: 'center', color: '#8284FA'}}>Courses</h1>
      <form onSubmit={handleSubmit} className={styles.newCourseForm}>
        <input placeholder="Add a new course name" type="text" onChange={onChangeName} value={name} />
        <input placeholder="Add a new course description" type="text" onChange={onChangeDescription} value={description} />
        <button>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  );
  
}
