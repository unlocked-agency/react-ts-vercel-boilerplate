import {Routes, Route} from 'react-router-dom';

import { PageLayout } from './layout/PageLayout';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage.tsx';
import { ErrorPage } from './pages/ErrorPage';

import './app.scss';

export const App = () => {

  return (
      <Routes>

        <Route element={<PageLayout/>}>
          <Route path="/" element={<HomePage/>} errorElement={<ErrorPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>

          <Route path="*" element={<ErrorPage/>}></Route>
        </Route>

      </Routes>
  )
}
