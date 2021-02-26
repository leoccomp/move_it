import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/leoccomp.png" alt="Imagem Perfil"/>
      <div>
        <strong>Leonardo Azevedo</strong>
        <p>
          <img src="icons/level.svg" alt="Imagem Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}