import {Outlet} from 'react-router';

import {HeaderSection} from './sections/HeaderSection';
import {FooterSection} from './sections/FooterSection';

import './page-layout.scss';

export const PageLayout = () => {

  //usePageTracking();

  return (
    <div id={'page-layout-container'}>

      <HeaderSection />
      <div id={'page-layout-content'}>
        <Outlet />
        <FooterSection />
      </div>
    </div>

  )
}
