import React, { useState } from 'react';
import CSVUploader from './components/CSVUploader';
import ChartDisplay from './components/ChartDisplay';
import './App.css';

const App = () => {
  const [csvData, setCsvData] = useState([]);

  return (
    <div className="App">
      <h1>CSV to Chart</h1>
      <CSVUploader onDataParsed={(data) => setCsvData(data)} />
      <ChartDisplay data={csvData} />
    </div>
  );
};

export default App;
