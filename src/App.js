import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [answer, setanswer] = useState('');  
  const [messageFound, setMessageFound] = useState(false);

  const transactionHash = 'abcd1234efgh5678ijkl9012mnop3456qrst7890'; // Replace with your actual transaction hash

  const handleAppNameSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === 'phoenix wallet') {
      setStep(3);
    } else {
      alert('Close, but not quite!');
    }
  };

  const handleBlockchainExplorerSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === 'blockchain') {
      window.open('https://bitcoinexplorer.org/');
      setStep(4);
    } else {
      alert('Ehm, you rather shouldn\'t go there!');
    }
  };

  const handleanswerSubmit = (e) => {
    e.preventDefault();
    if (answer === '2010') {
      setStep(5);
    } else {
      alert('Close, but not quite!');
    }
  };
 
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log('Message submitted:', answer);
    if (answer.toLowerCase() === 'patrik + michaela; ani ocean nas nerozdelil') {
      setStep(6);
    } else {
      alert('Close, but not quite!');
    }
  };

  const handleFinalCipherSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === 'SdwulnPlfkdhoddqlrfhdqqdvqhurcgholo') {
      setMessageFound(true);
    } else {
      alert('Close, but not quite!');
    }
  };

  return (
    <div className="container mt-5">


      {step === 1 && (
        <div className="card p-4 text-white">
          <h3>Welcome to the Treasure Hunt!</h3>
          <p>
            Each step brings you closer to a special surprise. Solve the riddles and follow the clues to reach the end. Are you ready?
          </p>
          <button className="btn btn-secondary" onClick={() => setStep(2)}>
            Let's Go!
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="card p-4">
          <h3>Task 1: Where do you keep your treasure?</h3>
          <p>
            "I am a bird that rises from ashes,  
            A wallet where lightning flashes.  
            Find me in your app store."
          </p>
          <form onSubmit={handleAppNameSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Who am I?"
              value={answer}
              onChange={(e) => setanswer(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="card p-4">
          <h3>Task 2: Are you lost?</h3>
          <p>
            "To search for the message I left in the chain,  
            An eternal ledger will be your domain.
            Carved in the stone, the truth will unfold,
            my message will exist, while exists this world."
          </p>
          <div className="mb-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/btc_map.png`}
              alt="Bitcoin Lightning Network"
              className="img-fluid"
            />
          </div>
          <form onSubmit={handleBlockchainExplorerSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Where do you go now?"              
              onChange={(e) => setanswer(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div className="card p-4">
          <h3>Task 3: Solve this riddle, or die</h3>
          <p>
            "I am an event that brought Bitcoin to the plate,  
            A tale of pizzas that changed its fate.  
            Search online for the year this began,  
            And input it here to reveal my plan."
          </p>
          <form onSubmit={handleanswerSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter the year"              
              onChange={(e) => setanswer(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      )}
      
      {step === 5 && (
        <div className="card p-4">
          <h3>Task 4: Find the secret message</h3>
          <p>
            2b0e8235767f56e14ffecd80c50a857a020747f78c72fbd623456a4a846f9307
          </p>
          <form onSubmit={handleMessageSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter the message"              
              onChange={(e) => setanswer(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      )}

      {step === 6 && (
        <div className="card p-4">
          <h3>Final step</h3>
          <p>
           "The truth that is revealed, is not what I seek,
            to get the final cipher, Caesar holds the key.
            Prove you are worthy, find its right form,
            follow rule of three and bring down the storm."
          </p>
          <form onSubmit={handleFinalCipherSubmit}>
          <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter the cipher"              
              onChange={(e) => setanswer(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      )}

      {messageFound && (
        <div className="card p-4">
          <h3>You found your treasure!</h3>
          <p>
            You're almost there! Open your Phoenix Wallet and share your Lightning Invoice with me to receive your treasure.
          </p>
          <p>Send me your invoice, and the gift is yours! 🎉</p>
        </div>
      )}
    </div>
  );
}

export default App;
