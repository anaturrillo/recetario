import React from 'react';
import { Link, IndexLink } from 'react-router';

export default function Header() {
  return (
    <nav>
      <IndexLink to="/" activeClass="active">Inicio</IndexLink>
      {' | '}
      <Link to="/ingredientes">Ingredientes</Link>
    </nav>
  );
}
