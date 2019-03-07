import React, { useState, useEffect } from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import './style.scss';
import { apps as appsList } from '../../common/config';

const MyApps = () => {
  const [apps, setApps] = useState(appsList);
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
    let selectedApp = { ...myApp };
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

  return (
    <AnimatedBox id="my-apps" title="My Apps">
      <ul id="app-list">
        {apps.map((app) => {
          const className = `app ${app.class}`;
          return (
            <li key={app.id} className={className} onClick={() => setSelectedApp(app.id)}>
              <img src={require(`../../media/${app.logo}`)} alt={app.alt} />
            </li>
          );
        })}
      </ul>
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
