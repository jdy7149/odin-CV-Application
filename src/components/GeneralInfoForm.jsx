function GeneralInfoForm({
  isSubmitted,
  savedGeneralInfo,
  saveGeneralInfo,
  onEdit,
}) {
  const { name, email, phoneNumber } = savedGeneralInfo;

  function onSubmit(event) {
    event.preventDefault();

    saveGeneralInfo(
      Object.fromEntries(new FormData(event.currentTarget).entries()),
    );
  }

  return (
    <div id="general" className="form-section general-section">
      <form className="form general-form" onSubmit={onSubmit}>
        <h1 className="form-title">General Information</h1>

        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={name}
              required
              readOnly={isSubmitted}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={email}
              required
              readOnly={isSubmitted}
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phone"
              defaultValue={phoneNumber}
              required
              readOnly={isSubmitted}
            />
          </div>
        </div>

        <div className="form-actions">
          {isSubmitted ? (
            <button
              key="edit"
              className="button button-edit"
              type="button"
              onClick={onEdit}
            >
              Edit
            </button>
          ) : (
            <button key="submit" className="button button-submit" type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default GeneralInfoForm;
