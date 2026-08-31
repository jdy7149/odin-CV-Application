import { useState } from "react";

function EduExperienceForm({ isSubmitted, onSubmit, onEdit }) {
  const [eduInfo, setEduInfo] = useState([]);

  return (
    <div id="edu">
      <h1>Education Experience</h1>
      {eduInfo.map(({ school, course, eduStartDate, eduEndDate }, i) => {
        <div>
          <form className="edu-form">
            <label htmlFor={'school-' + i}>Shcool</label>
            <input type="text" name="school" id={'school-' + i} value={school} required readOnly={isSubmitted}/>
            <label htmlFor={'course-' + i}>Course</label>
            <input type="text" name="course" id={'course-' + i} value={course} required readOnly={isSubmitted} />
            <label htmlFor={'eduStart-' + i}>Start Date</label>
            <input type="date" name="eduStart" id={'eduStart-' + i} value={eduStartDate} required readOnly={isSubmitted} />
            <label htmlFor={'eduEnd-' + i}>End Date</label>
            <input type="date" name="eduEnd" id={'eduEnd-' + i} value={eduEndDate} readOnly={isSubmitted} />
            <div>
              {!isSubmitted && <button type="button">Delete</button>} 
            </div>
          </form>
        </div>
      })}
      <div>
        {isSubmitted ? (
          <button type="button" onClick={onEdit}>Edit</button>
        ) : (
          <>
            <button type="button" onClick={setEduInfo([...eduInfo, {id:crypto.randomUUID()}])}>Add</button>
            <button type="submit" onClick={onSubmit}>Submit</button>
          </>
        )}
      </div>
    </div>
  )
}

export default EduExperienceForm;