import React, { useState } from 'react';
import Papa from 'papaparse';

const CSVUploader = ({ onDataParsed }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          onDataParsed(result.data);
        },
        skipEmptyLines: true,
      });
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
};

export default CSVUploader;
