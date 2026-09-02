import GeneralInfoForm from "./components/GeneralInfoForm";
import EduExperienceForm from "./components/EduExperienceForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import GeneralInfo from "./components/GeneralInfo";
import EduExperience from "./components/EduExperience";
import WorkExperience from "./components/WorkExperience";

import parseFormData from "./utils/parseFormData";

import { useState } from "react";

function App() {
  const [isGeneralSubmitted, setIsGeneralSubmitted] = useState(false);
  const [isEduSubmitted, setIsEduSubmitted] = useState(false);
  const [isWorkSubmitted, setIsWorkSubmitted] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({});
  const [eduItems, setEduItems] = useState([]);
  const [workItems, setWorkItems] = useState([]);

  function onGeneralSubmit() {
    setGeneralInfo(
      Object.fromEntries(
        new FormData(document.querySelector("#general")).entries(),
      ),
    );
    setIsGeneralSubmitted(true);
  }

  function onEduSubmit() {
    setEduItems(parseFormData("edu", "edu-form"));
    setIsEduSubmitted(true);
  }

  function onWorkSubmit() {
    setWorkItems(parseFormData("work", "work-form"));
    setIsWorkSubmitted(true);
  }

  return (
    <>
      <div>
        <h1>CV-Applicatioon</h1>
      </div>
      <div>
        <GeneralInfoForm
          isSubmitted={isGeneralSubmitted}
          onSubmit={onGeneralSubmit}
        />
        <EduExperienceForm
          isSubmitted={isEduSubmitted}
          onSubmit={onEduSubmit}
        />
        <WorkExperienceForm
          isSubmitted={isWorkSubmitted}
          onSubmit={onWorkSubmit}
        />
      </div>
      <div>
        <GeneralInfo info={generalInfo} />
        <EduExperience items={eduItems} />
        <WorkExperience items={workItems} />
      </div>
    </>
  );
}

export default App;
