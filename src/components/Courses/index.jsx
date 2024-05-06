// components/Courses/index.jsx
import { Course } from '../Course';
import styles from './courses.module.css';

export function Courses({ courses, onDelete, onComplete }) {
  const coursesQuantity = courses.length;
  const completedCourses = courses.filter(course => course.isCompleted).length;

  return (
    <section className={styles.courses}>
      <header className={styles.header}>
        <div className={styles.info}>
          <p className={styles.infoText}>Created courses</p>
          <span>{coursesQuantity}</span>
        </div>

        <div className={styles.info}>
          <p className={`${styles.infoText} ${styles.textPurple}`}>Completed courses</p>
          <span>{completedCourses} of {coursesQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {courses.map((course) => (
          <Course key={course.id} course={course} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  )
}
