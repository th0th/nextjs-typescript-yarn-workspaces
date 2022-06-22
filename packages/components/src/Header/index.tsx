import classNames from 'classnames';
import React from 'react';
import styles from './Header.module.css';

export type HeaderProps = {
  children: React.ReactNode,
  className?: string,
};

export function Header({ children, className }: HeaderProps) {
  return (
    <header className={classNames([styles.header, className])}>
      {children}
    </header>
  );
}
