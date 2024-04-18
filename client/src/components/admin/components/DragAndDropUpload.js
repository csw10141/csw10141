import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function MultiDragAndDropUpload() {
  const [images, setImages] = useState([]);

  // 파일 업로드 처리
  const handleUpload = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  // 드래그 앤 드롭 처리
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  // 드래그 오버 처리
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // 이미지 파일 처리
  const handleFiles = (files) => {
    const fileList = [...files];
    const imagesArray = fileList.map(file => URL.createObjectURL(file));
    setImages(prevImages => prevImages.concat(imagesArray));
  };

  // 이미지 삭제 처리
  const handleDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  // 모든 이미지 삭제 처리
  const handleDeleteAll = () => {
    setImages([]);
  };

  return (
    <div
      style={{ border: '2px dashed #aaa', padding: '20px', textAlign: 'center' }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        multiple
        onChange={handleUpload}
        style={{ display: 'none' }}
        id="fileInput"
      />
    <label
        htmlFor="fileInput"
        onDragStart={(e) => e.preventDefault()}
        onClick={(e) => {
            e.preventDefault();
            document.getElementById('fileInput').click();
        }}
    >
        드래그 & 드롭 또는 파일 선택
      </label>
      <div>
        {images.map((image, index) => (
          <div key={index} style={{ display: 'inline-block', position: 'relative' }}>
            <img
              src={image}
              alt={`Uploaded ${index}`}
              style={{ maxWidth: '200px', maxHeight: '200px', margin: '10px' }}
            />
            <Button
                size="sm"
                variant="danger"
                style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}
                onClick={() => handleDelete(index)}
            >
              삭제
            </Button>
          </div>
        ))}
      </div>
      {images.length > 0 && (
        <Button variant="danger" style={{ marginTop: '10px' }} onClick={handleDeleteAll}>모두 삭제</Button>
      )}
    </div>
  );
}

export default MultiDragAndDropUpload;
