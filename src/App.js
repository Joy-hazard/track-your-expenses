import Logo from './logo.svg'
import './App.css';
import React, { useState, useEffect } from 'react'
import HeadNAV from './HeadNAV';
import { Container } from 'reactstrap'
import EForms from './EForms';
import OListO from './OListO';

const ALL_EXPENSES = [
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 2, name: 'Buy a milk', amount: 5 },
  { id: 3, name: 'Book a flight ticket', amount: 225 }
]

function App() {

  const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []


  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState(ALL_EXPENSES)

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmitForm = event => {
    event.preventDefault()
    //check whether the name is not empty and the amount is not negative
    if (name !== '' && amount > 0) {
      // single expense object
      const expense = { name, amount }
      // do not override previous values in the array
      // use spread operator to access previous values
      setExpenses([...expenses, expense])
  
      // clean input fields
      setName('')
      setAmount('')
    } else {
      console.log('Invalid expense name or the amount')
    }
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleClearExpenses = () => {
    setExpenses([])
  }

  return (
    <div>
      <HeadNAV />
      <Container className="text-center">
        <h3 className="display-6">
          Track Your Expenses
          <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
        </h3>
        <div>
          <p>
            Total Expense:{' '}
            <span className="text-success">
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        <EForms
          name={name}
          amount={amount}
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmitForm={handleSubmitForm}
          handleClearExpenses={handleClearExpenses}
        />
        <OListO expenses={expenses} />
      </Container>
    </div>

  );
}

export default App;
