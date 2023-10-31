interface ButtonProps {
  text: string,
  onTap?: () => void,
}

export default function Button({text, onTap}: ButtonProps) {
  return <div
    onClick={onTap}
    className="w-fit button-box hover:cursor-pointer hover:scale-95"
    style={{
      borderColor: '#BFDBFE',
      borderWidth: '2.3px',
      padding: '14px 66px 14px 66px',
      display: 'inline-block',
      fontFamily: 'Pretendard-Regular',
    }}>
    {text}
  </div>
}
