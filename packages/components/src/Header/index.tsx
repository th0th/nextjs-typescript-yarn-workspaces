import classNames from 'classnames';
import React from 'react';
import styles from './Header.module.css';

type Props = {
  children: React.ReactNode,
  className?: string,
};

const Header = ({ children, className }: Props) => (
  <header
    className={classNames([
      styles.header,
      className,
    ])}
  >
    {children}
  </header>
);

export default Header;
