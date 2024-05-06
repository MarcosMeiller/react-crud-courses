import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Courses } from "./components/Courses";

const LOCAL_STORAGE_KEY = 'todo:courses';

function App() {
  const [courses, setCourses] = useState([]);

  function loadSavedCourses() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setCourses(JSON.parse(saved));
    }
  }

  function setCoursesAndSave(newCourses) {
    setCourses(newCourses);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCourses));
  }

  useEffect(() => {
    loadSavedCourses();
  }, [])

  function addCourse(courseName, courseDescription) {
    setCoursesAndSave([...courses, {
      id: crypto.randomUUID(),
      name: courseName,
      description: courseDescription,
      isCompleted: false
    }]);
  }

  function deleteCourseById(courseId) {
    const newCourses = courses.filter(course => course.id !== courseId);
    setCoursesAndSave(newCourses);
  }

  function toggleCourseCompletedById(courseId) {
    const newCourses = courses.map(course => {
      if(course.id === courseId) {
        return {
          ...course,
          isCompleted: !course.isCompleted
        }
      }
      return course;
    });
    setCoursesAndSave(newCourses);
  }

  return (
    <>
      <Header handleAddCourse={addCourse} />
      <Courses
        courses={courses}
        onDelete={deleteCourseById}
        onComplete={toggleCourseCompletedById}
      />
    </>
  )
}

export default App;
