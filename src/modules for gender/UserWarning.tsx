interface IProps {
  warning: string
}

export function UserWarning({warning}: IProps) {
  return(
      <p className="warning">{warning}</p>
  )
}
