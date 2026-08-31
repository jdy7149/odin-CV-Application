function GeneralInfoForm({ info, isSubmitted, onSubmit, onEdit }) {
  const {name, email, phoneNumber} = info;

  return (
    <form action="" id="general">
      <div>
        <h1>General Information</h1>
        <div>
          <label htmlFor="name" />
          <input type="text" name="name" id="name" value={name} required readOnly={isSubmitted} />
          <label htmlFor="email" />
          <input type="email" name="email" id="email" value={email} required readOnly={isSubmitted} />
          <label htmlFor="phone" />
          <input type="tel" name="phone" id="phone" value={phoneNumber} readOnly={isSubmitted} />
        </div>
        <div>
          {isSubmitted ? (
            <button type="button" onClick={onEdit}>Edit</button>
          ) : (
            <button type="button" onClick={onSubmit}>Submit</button>
          )}
        </div>
      </div>
    </form>
  )
}

export default GeneralInfoForm;