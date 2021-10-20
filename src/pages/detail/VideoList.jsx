import React, { useState, useEffect, useRef } from "react";
import tmdbApi from "../../api/tmdb";
import { useParams } from "react-router";
import api from "../../api/config";

const VideoList = (props) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      let response = await tmdbApi.getVideos(category, props.id);
      setVideos(response.results.slice(0, 5));
    };
    getVideos();
  }, [category, props.id]);
  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

const Video = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);
  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe width="100%" title="cast" ref={iframeRef} src={`https://www.youtube.com/embed/${item.key}`} frameborder="0"></iframe>
    </div>
  );
};

export default VideoList;
