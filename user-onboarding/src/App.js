import React, { useState } from 'react';
import './App.css';

import FormikOnboardingForm from './Components/Form/OnboardingForm';

const App = () => {

const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <FormikOnboardingForm users={users} />
    </div>
  );
}

export default App;
