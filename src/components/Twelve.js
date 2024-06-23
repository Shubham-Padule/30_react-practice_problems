import React, { useState } from 'react';

function Twelve() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Create a preview URL
    const fileUrl = URL.createObjectURL(selectedFile);
    setPreview(fileUrl);
  };

  return (
    <div>
      <h1>Twelve</h1>
      <div>
        <input type='file' accept='image/*' onChange={handleFileChange} />
      </div>
      {preview && (
        <div>
          <h2>Image Preview:</h2>
          <img src={preview} alt="Selected" style={{ width: '300px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

export default Twelve;
