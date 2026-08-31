function GeneralInfo({ info }) {
  const {name, email, phoneNumber} = info;

  return (
    <div>
      <h1>General Information</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phoneNumber}</p>
    </div>
  )
}

export default GeneralInfo;