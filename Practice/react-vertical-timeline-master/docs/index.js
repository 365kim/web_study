/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import 'purecss/build/pure.css';
import VerticalLoadMore from './vertical-load-more';
import { VerticalTimeline, VerticalTimelineElement } from '../src/index';
import './main.css';
import '../style.css';

import MyTimeline from "../component/MyTimeline";

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <h1 >안뇽</h1>
    <MyTimeline/>
  </div>,
  document.getElementById('catalog')
);
