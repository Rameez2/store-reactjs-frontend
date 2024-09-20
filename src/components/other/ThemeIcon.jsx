import styles from '../../styles/other/themeIcon.module.css'
import { ThemeContext } from '../../providers/themeContext';
import { useContext } from 'react';

export default function ThemeIcon() {
  const {theme,toggleTheme} = useContext(ThemeContext);
  
  return (
    <div className={styles.switchContainer}>
    <label htmlFor="switch" className={styles.switch}>
      <input id="switch" type="checkbox" defaultChecked={theme === 'light-theme'} onClick={toggleTheme} /> 
      <span className={styles.slider}></span>
      <span className={styles.decoration}></span>
    </label>
  </div>
  )
}
