import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import './style.scss'
import DetailsBanner from './detailbanner/DetailsBanner'
import useFetch from '../../hooks/useFetch';
import Cast from './cast/Cast';
import VideosSection from './videosection/VideoSection';
import Recommendation from './carousels/Recommendation';
import Similar from './carousels/Similar';


const Details = () => {

    const {mediaType, id} = useParams();

    const {data, loading} = useFetch(`/${mediaType}/${id}/videos`);

    const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);

    const {url} = useSelector((state) => state.home);

    // console.log(credits);
     console.log("alldata: '/videos:"+ data?.id);


  return (
    <div>

      <DetailsBanner  video={data?.results?.[0]}  crew={credits?.crew}/>
      <Cast  data={credits?.cast}  loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Recommendation  mediaType={mediaType} id={id} />
      <Similar  mediaType={mediaType} id={id} />

    </div>
  )
}

export default Details