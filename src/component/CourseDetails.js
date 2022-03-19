import { useParams } from "react-router-dom";
import { courses } from "../utilities/courses";

const CourseDetails = () => {
  const params = useParams();
  return <div>{courses[params.id - 1].course.title}</div>;
};

export default CourseDetails;
