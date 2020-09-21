import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { MyList } from '../../components/List';
import { MyLoading } from '../../components/Loading';
import api from '../../services/api';

export default function Home() {
  const SECTIONS = ['technology', 'science'];
  // TODO colocar no ENV
  const API_KEY = 'TaeFgIptJ2yB9bwYXAGysbfqC6D54i96';

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);

      let allNews = [];
      SECTIONS.forEach(async (section, index) => {
        const {
          data: { results },
        } = await api.get(`topstories/v2/${section}.json?api-key=${API_KEY}`);

        allNews = [...allNews, ...results];
        if (index === SECTIONS.length - 1) {
          setNews(allNews);
        }
      });

      setLoading(false);
    };
    getNews();
  }, []);

  return loading ? (
    <MyLoading />
  ) : (
    <>
      <Header />
      <MyList items={news} />
    </>
  );
}
