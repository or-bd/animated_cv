import React, { useState, useEffect } from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import Cv from '../../common/CvData';
import './style.scss';

const MyApps = () => {
  const [apps, setApps] = useState(Cv.apps);
  const [myApp, setMyApp] = useState({});

  useEffect(() => {
    let timeout = null;
    const appsClone = [...apps];
    const hiddenApp = apps.find(app => app.class.includes('no-opacity'));

    if (hiddenApp) {
      timeout = setTimeout(() => {
        hiddenApp.class = `${hiddenApp.class.replace('no-opacity', '')} bounceIn`.trim();
        setApps(appsClone);
      }, 100);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [apps]);

  useEffect(() => {
    setSelectedApp(1);
  }, []);

  const setSelectedApp = (appId) => {
    let selectedApp = {};
    const appsClone = [...apps].map((app) => {
      if (app.id === appId && !app.class.includes('app-selected')) {
        app.class += ' app-selected';
        selectedApp = { ...app };
      } else if (app.id !== appId) {
        app.class = app.class.replace('app-selected', '').trim();
        app.class = app.class.replace('bounceIn', '').trim();
      }
      return app;
    });
    setApps(appsClone);
    setMyApp(selectedApp);
  };

  const GetAppList = () => (
    <ul id="app-list">
      {apps.map(app => (
        <li key={app.id} className={`app ${app.class}`} onClick={() => setSelectedApp(app.id)}>
          <img src={require(`../../media/${app.logo}`)} alt={app.alt} />
        </li>
      ))}
    </ul>
  );

  return (
    <AnimatedBox id="my-apps" title="My Apps">
      <GetAppList />
      <div id="my-app" className={myApp.link ? 'fade-in' : 'no-opacity'}>
        <div id="description">
          <div>{myApp.description}</div>
        </div>
        <div id="link">
          <a href={myApp.link} target="_blank" rel="noopener noreferrer">
            <span>Visit</span>
            <i className="fas fa-chevron-right" />
          </a>
        </div>
      </div>
    </AnimatedBox>
  );
};

export default MyApps;
