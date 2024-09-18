import React from 'react'

function Form() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd4340b8-4516-4bba-bd0b-b20668e42c58");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className='flex flex-col gap-2 w-full'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name">Your name</label>
          <input type="text"
            name="name"
            id="name"
            placeholder='Enter your name'
            className='w-full outline-none border-gray-900 p-2 bg-[#f2f2f2] dark:bg-[#383838] rounded' 
            required />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="phone">Phone number</label>
          <input type="tel" 
          name="phone" 
          id="phone" 
          placeholder='Enter your phone number ' 
          className='w-full outline-none border-gray-900 p-2 dark:bg-[#383838] rounded bg-[#f2f2f2]'
          required />
        </div>
        <div className='flex flex-col gap-1'>
          <label>Write your message here</label>
          <textarea name="message" 
          rows="6" 
          placeholder='Enter your message' 
          className='dark:bg-[#383838] rounded p-2 bg-[#f2f2f2]'
          required>
          </textarea>
        </div>
        <button type='submit' className='btn dark-btn w-32 py-2 px-4 rounded-md  '>Submit now<img src="" alt="" /></button>
      </form>
      <span>{result}</span>
    </>
  )
}

export default Form