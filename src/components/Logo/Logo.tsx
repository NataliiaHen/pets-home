import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import './Logo.scss';

export const Logo: React.FC = memo(() => (
  <Link to="/" className="header__logo logo">
    <ReactSVG src="img/Logo.svg" />
  </Link>
));
