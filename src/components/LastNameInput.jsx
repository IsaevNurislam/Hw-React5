function LastNameInput({ value, onChange }) {
    return (
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  export default LastNameInput