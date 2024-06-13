import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTabs/SwitchTab';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab) => {
        if (tab === "Day") { setEndpoint("day") }
        else if (tab === "Week") { setEndpoint("week") }
        else{setEndpoint("day")}
     };
  return (
    <div className='carouselSection'>
          <ContentWrapper className="contentWrapper">
              <span className="carouselTitle">
                   Trending Movies & TV Shows
              </span>
              <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
          </ContentWrapper>
          <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending;
