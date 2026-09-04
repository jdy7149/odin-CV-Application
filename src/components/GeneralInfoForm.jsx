function GeneralInfoForm({
  isSubmitted,
  savedGeneralInfo,
  saveGeneralInfo,
  onEdit,
}) {
  const { name, email, phoneNumber } = savedGeneralInfo;

  return (
    <div id="general">
      <form action="" className="general-form">
        <h1>General Information</h1>
        <div>
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            readOnly={isSubmitted}
          />
          <label htmlFor="email" />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            readOnly={isSubmitted}
          />
          <label htmlFor="phone" />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phoneNumber}
            readOnly={isSubmitted}
          />
        </div>
        <div>
          {isSubmitted ? (
            <button type="button" onClick={onEdit}>
              Edit
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                saveGeneralInfo(
                  Object.fromEntries(
                    new FormData("general", "general-form").entries(),
                  ),
                )
              }
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default GeneralInfoForm;
