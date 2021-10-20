import React, { useState, useEffect, useRef } from "react";
import "./heroslide.scss";
import tmdbApi, { category, movieType } from "../../api/tmdb";
import api from "../../api/config";
import "./heroslide.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button, { OutLineButton } from "../button/Button";
import { useHistory } from "react-router";
import Modal, { ModalContent } from "../modal/Modal";
const Heroslide = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieItems(response.results.slice(1, 4));
        console.log(response);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        speed={500}
        autoplay={{ delay: 10000 }}
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>{({ isActive }) =>  <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} /> }</SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

const HeroSlideItem = (props) => {
  const history = useHistory();

  const item = props.item;
  const setActiveModal = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      let videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;

      modal.querySelector(".modal__content > iframe").setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML("No trailer");
    }
    modal.classList.toggle("active");
  };
  const background = api.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
  return (
    <div style={{ backgroundImage: `url(${background})` }} className={`hero-slide__item ${props.className}`}>
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push("/movie/" + item.id)}>Watch Now</Button>
            <OutLineButton onClick={setActiveModal}>Watch trailer</OutLineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={api.w500Image(item.poster_path)} />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = props => {
     const item = props.item;
     const iframeRef = useRef(null);
     const onClose = () => iframeRef.current.setAttribute('src', '');
     return (
         <Modal active={false} id={`modal_${item.id}`}>
             <ModalContent onClose={onClose}>
                 <iframe ref={iframeRef} width="100%" height="450px" title="trailer"></iframe>
             </ModalContent>
         </Modal>
     )
 }

export default Heroslide;
