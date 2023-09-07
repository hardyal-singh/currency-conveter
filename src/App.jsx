import React, { useState } from "react";
import { InputBox } from "./components/Index";
import useCurrenyInfo from "./hooks/useCurrenyInfo";
import Pic from "./assets/hitesh-sir-tea.jpg";


export default function App() {

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrenyInfo(from);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const options = Object.keys(currencyInfo);
  
  let pic="./assets/hitesh-sir-tea.jpg"

 return( <div
  className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
  style={{
      backgroundImage: `url(${Pic})`,
      backgroundSize:"100vw 100vh"
  }}
>
  <div className="w-full flex justify-end">
      <div className=" max-w-md  border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
              onSubmit={(e) => {
                  e.preventDefault();
                  convert()
                 
              }}
          >
              <div className="w-full mb-1">
                  <InputBox
                      label="From"
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setAmount(amount)}
                      selectCurrency={from}
                      onAmountChange={(amount) => setAmount(amount)}
                  />
              </div>
              <div className="relative w-full h-0.5">
                  <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                      onClick={swap}
                  >
                      swap
                  </button>
              </div>
              <div className="w-full mt-1 mb-4">
                  <InputBox
                      label="To"
                      amount={convertedAmount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setTo(currency)}
                      selectCurrency={to}
                      amountDisable
                  />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
          </form>
      </div>
  </div>
</div>
);
}