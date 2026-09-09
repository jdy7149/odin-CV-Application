function GeneralInfo({ info }) {
  const { name, email, phoneNumber } = info;

  return (
    <div className="saved-experience" id="saved-general">
      <h1 className="saved-experience-title">General Information</h1>

      <div className="saved-experience-form">
        <div className="saved-field">
          <span className="saved-field-label">Name:</span>
          <span className="saved-field-value">{name}</span>
        </div>

        <div className="saved-field">
          <span className="saved-field-label">Email:</span>
          <span className="saved-field-value">{email}</span>
        </div>

        <div className="saved-field">
          <span className="saved-field-label">Phone:</span>
          <span className="saved-field-value">{phoneNumber}</span>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;

