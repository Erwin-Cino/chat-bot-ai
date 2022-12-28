import './App.css';
import {useState} from 'react'
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('')
  const handleChangePrompt = (e) => {
    setPrompt(e.target.value)
  }
  const [aiResponse, setAiResponse] = useState('')
  const handleSubmitPrompt = async (e) => {
    e.preventDefault();
    const aiSaid = await axios.post('/ask-an-ai', {
      prompt
    })
    setAiResponse(aiSaid?.data?.message);
  }
  return (
    <>
      <div className="main-div">
        <form onSubmit={handleSubmitPrompt} className="ai-form">
          <textarea value={prompt} onChange={handleChangePrompt}></textarea>
          <button className='btn-submit' type="submit">Submit</button> 
        </form>
        <div className='ai-response-box'>{aiResponse}</div>
      </div>
    </>
  );
}

export default App;
