import styles from './course.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TiTrash } from 'react-icons/ti';

export function Course({ course, onDelete, onComplete }) {
  return (
    <div className={styles.course}>
      <button className={styles.checkContainer} onClick={() => onComplete(course.id)}>
        {course.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <div className={styles.details}>
        <h3 className={course.isCompleted ? styles.textCompleted : ""}>
          {course.name}
        </h3>
        <p>{course.description}</p>
      </div>

      <button className={styles.deleteButton} onClick={() => onDelete(course.id)}>
        <TiTrash size={20} />
      </button>
    </div>
  )
}
