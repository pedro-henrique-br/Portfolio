import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer} style={{position: "absolute", bottom: 0, left: 0}}>
      <h1 style={{color: "#585858"}}>Copyright © 2024 <span style={{color: "#cecece"}}>{"< Pedro Barbosa />"}</span></h1>
    </footer>
  )
}
