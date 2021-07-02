import styles from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = props => {
  const { disabled, onClick, title } = props
  return (
    <button className={styles.wrapper} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
