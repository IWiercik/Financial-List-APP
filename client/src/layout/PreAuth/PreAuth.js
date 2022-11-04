import { PreAuthWrapper } from './PreAuth.style';
import Navigation from 'components/organisms/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CenterContainer } from 'components/molecules/CenterContainer/CenterContainer.style';
import Home from 'routes/Home/Home';
import Login from 'routes/Login/Login';
import Registration from 'routes/Registration/Registration';
import PageNotFound from 'routes/PageNotFound/PageNotFound';

function PreAuth() {
  return (
    <BrowserRouter>
      <PreAuthWrapper>
        <Navigation></Navigation>
        <CenterContainer>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CenterContainer>
      </PreAuthWrapper>
    </BrowserRouter>
  );
}

export default PreAuth;
