function GeneralInfo({ info }) {
  const { name, email, phoneNumber } = info;

  return (
    <div>
      <h1>General Information</h1>

      <form className="saved-general-form">
        <div>
          <label htmlFor="saved-name">Name: </label>
          <input
            type="text"
            name="name"
            id="saved-name"
            value={name}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="saved-email">Email: </label>
          <input
            type="email"
            name="email"
            id="saved-email"
            value={email}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="saved-phoneNumber">Phone: </label>
          <input
            type="tel"
            name="phoneNumber"
            id="saved-phoneNumber"
            value={phoneNumber}
            readOnly
          />
        </div>
      </form>
    </div>
  );
}

export default GeneralInfo;
