import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from "../project.module.css";

function YouTubePreview() {
  const [videoUrl, setVideoUrl] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');

  const handleInputChange = (e) => {
    const url = e.target.value;
    setVideoUrl(url);
    const videoId = extractVideoId(url);
    if (videoId) {
      setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
    } else {
      setEmbedUrl('');
    }
  };

  const extractVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <div>
      <Form.Control
        className={styled.con_input}
        type="text"
        value={videoUrl}
        placeholder="YouTube 링크를 입력하세요"
        onChange={handleInputChange}
      />
      {embedUrl && (
        <div style={{ marginTop: '10px' }}>
          <iframe
            title="YouTube Video Preview"
            width="640"
            height="360"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default YouTubePreview;