import './TextInput.css'
const TextInput = ({ label, value, setValue }) => {
  return (
    <>
      <input
        type='text'
        className='TextField'
        placeholder='Search movie'
        label={label}
        value={value}
        required
        onChange={(e) => {
          setValue(e.target.value)
          //handleChange(e.target.value, value);
        }}
      />
    </>
  )
}

export default TextInput
