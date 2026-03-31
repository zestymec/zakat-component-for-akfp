import React, { useState } from 'react';
import './index.css';

function App() {
  const ONCE_OFF_OPTIONS = [100, 249, 350, 500, 1000, 2500, 5000, 10000];
  const MONTHLY_OPTIONS = [5, 10, 15, 30];

  const amountMessages = {
    100: "Could provide a cash survival grant for a widow in urgent need",
    249: "Could provide medical supplies and lifesaving treatment to families",
    350: "Could feed a displaced family for an entire month with nutritious meals",
    500: "Could provide clean water facilities for an entire village community",
    1000: "Could build a permanent shelter for a family lost in a disaster",
    2500: "Could support the education and welfare of five orphaned children",
    5000: "Could establish a small sustainable business for a struggling community",
    10000: "Could fund a major emergency relief operation to save hundreds of lives"
  };

  const [frequency, setFrequency] = useState('single');
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');

  const displayOptions = frequency === 'regular' ? MONTHLY_OPTIONS : ONCE_OFF_OPTIONS;

  const handleToggle = (type) => {
    setFrequency(type);
    setAmount(type === 'regular' ? 5 : 100);
    setCustomAmount('');
  };

  const onDonate = () => {
    const payload = {
      value: customAmount || amount,
      frequency: frequency,
      type: 'Zakat'
    };
    console.log("Submission Data:", payload);
  };

  return (
    <div className='zakat-container'>
      <div className='zakat-main-grid'>
        
        <div className='zakat-content'>
          <h1 className='zakat-heading'>Zakat is a divine trust</h1>
          <div className='zakat-description'>
            <p>Zakat is one of the Five Pillars of Islam; therefore, it is an obligation upon all eligible Muslims to uphold. It is a divine trust which recognises our duty to serve our fellow brothers and sisters globally by creating more balance and care within our society. It applies to 2.5% of eligible savings and assets held for one lunar year as a means to purify our wealth. Only Muslims who meet a minimum wealth threshold (nisab) are required to pay it.</p>
            <p>We believe in a safer, dignified world for all. Donate your Zakat to protect the world’s most vulnerable communities.</p>
            <p>Zakat is a pledge to protect those who need it most. At Muslim Aid, we understand the weight of this responsibility and treat Zakat with the transparency, efficiency and trust it deserves.</p>
          </div>
        </div>

        <div className='zakat-form-card'>
          <div className="payment-toggle-container">
            <button 
              className={`toggle-btn ${frequency === 'single' ? 'active' : ''}`}
              onClick={() => handleToggle('single')}
            >
              Single Payment
            </button>
            <button 
              className={`toggle-btn ${frequency === 'regular' ? 'active' : ''}`}
              onClick={() => handleToggle('regular')}
            >
              Regular Payment
            </button>
          </div>

          <div className='amount-selection-grid'>
            {displayOptions.map((val) => (
              <button
                key={val}
                className={`amount-btn ${amount === val && !customAmount ? 'active' : ''}`}
                onClick={() => { setAmount(val); setCustomAmount(''); }}
              >
               {val} Pkr 
              </button>
            ))}
          </div>

          <div className="status-info-box">
            {frequency === 'regular' ? "Zakat Fund" : (amountMessages[amount] || "Your contribution makes a massive difference")}
          </div>

          <div className="input-group">
            <span className="currency-symbol">Pkr </span>
            <input
              type="number"
              placeholder="Other"
              className="other-input"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              onKeyDown={(e) => e.key === '-' && e.preventDefault()}
            />
          </div>

          <select className="form-select">
            <option value="zakat">Zakat</option>
          </select>

          <button className="donate-btn" onClick={onDonate}>Donate</button>
        </div>

      </div>
    </div>
  );
}

export default App;