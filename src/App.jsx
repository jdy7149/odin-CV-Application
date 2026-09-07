import GeneralInfoForm from "./components/GeneralInfoForm";
import EduExperienceForm from "./components/EduExperienceForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import GeneralInfo from "./components/GeneralInfo";
import EduExperience from "./components/EduExperience";
import WorkExperience from "./components/WorkExperience";

import { useState } from "react";

function App() {
  const [isGeneralSubmitted, setIsGeneralSubmitted] = useState(false);
  const [isEduSubmitted, setIsEduSubmitted] = useState(false);
  const [isWorkSubmitted, setIsWorkSubmitted] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [eduItems, setEduItems] = useState([]);
  const [workItems, setWorkItems] = useState([]);

  function saveGeneralInfo(localInfo) {
    setGeneralInfo(localInfo);
    setIsGeneralSubmitted(true);
  }

  function onGeneralEdit() {
    setIsGeneralSubmitted(false);
  }

  function saveEduItems(localItems) {
    setEduItems(localItems);
    setIsEduSubmitted(true);
  }

  function onEduEdit() {
    setIsEduSubmitted(false);
  }

  function saveWorkItems(localItems) {
    setWorkItems(localItems);
    setIsWorkSubmitted(true);
  }

  function onWorkEdit() {
    setIsWorkSubmitted(false);
  }

  return (
    <>
      <header>
        <div className="header">
          <h1>CV-Applicatioon</h1>
        </div>
      </header>
      <main>
        <div className="main">
          <section>
            <div className="form-wrapper">
              <GeneralInfoForm
                isSubmitted={isGeneralSubmitted}
                savedGeneralInfo={generalInfo}
                saveGeneralInfo={saveGeneralInfo}
                onEdit={onGeneralEdit}
              />
              <EduExperienceForm
                isSubmitted={isEduSubmitted}
                savedEduItems={eduItems}
                saveEduItems={saveEduItems}
                onEdit={onEduEdit}
              />
              <WorkExperienceForm
                isSubmitted={isWorkSubmitted}
                savedWorkItems={workItems}
                saveWorkItems={saveWorkItems}
                onEdit={onWorkEdit}
              />
            </div>
          </section>
          <section>
            <h1>CV Preview</h1>
            <div className="display-wrapper">
              <GeneralInfo info={generalInfo} />
              <EduExperience items={eduItems} />
              <WorkExperience items={workItems} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
