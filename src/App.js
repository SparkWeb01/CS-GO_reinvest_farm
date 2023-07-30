import React, { useEffect, useState } from "react";
function App() {
    const [accounts, setAccounts] = useState(12);
    const [totalEarned, setTotalEarned] = useState(0);
    
    useEffect(() => {
      calculateTotalEarned();
    }, []);
  
    const calculateTotalEarned = (valueb) => {
      let weeks = 51;
      let earned = 0;
      let currentAccounts = accounts;
  
      while (weeks > 0) {
        earned += currentAccounts * 80;
  
        if (earned >= 960) {
          let maxBuyable = Math.floor(earned / 960);
          earned -= maxBuyable * 960;
          currentAccounts += maxBuyable;
        }
  
        weeks--;
      }
  
      setTotalEarned(earned);
      setAccounts(currentAccounts);
    };
  
        
return ( 
    <div className="App">
      <h1>Число аккаунтов на старте: 12</h1>
      {/*<input type="number" value={accounts} placeholder="Введите количество аккаунтов"  onChange={(e)=>calculateTotalEarned(e.target.value)}/>*/}
      <h1>Заработок в неделю: {accounts*80} rub</h1>
      <h1>Количество аккаунтов через год реинвестирования: {accounts}</h1>
      <h1>Остаток на балансе: {totalEarned}</h1>
    </div>
  )
}
export default App
