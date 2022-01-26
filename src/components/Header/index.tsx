import logoImg from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logoImg} 
          alt="Logo To Do" 
          width="90" 
          role="logo"        
          />
      </div>
    </header>
  )
}