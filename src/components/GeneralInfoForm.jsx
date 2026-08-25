function GeneralInfoForm({ info }) {
  const { name, email, phoneNumber } = info;

  return (
    <div>
      <h1>General Information</h1>
      <label htmlFor="name" />
      <input type="text" name="name" id="name" value={name} />
      <label htmlFor="email" />
      <input type="email" name="email" id="email" value={email} />
      <label htmlFor="phone" />
      <input type="tel" name="phone" id="phone" value={phoneNumber} />
      <button type="button">Submit</button>
    </div>
  )
}

export default GeneralInfoForm;