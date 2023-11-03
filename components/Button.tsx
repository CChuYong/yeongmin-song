interface ButtonProps {
  text: string,
  onTap?: () => void,
}

export default function Button({text, onTap}: ButtonProps) {
  return <div
    onClick={onTap}
    className="w-fit button-box hover:cursor-pointer hover:scale-95 border-2 inline-block border-b-blue-100 px-20 py-3.5"
    style={{
      fontFamily: 'Pretendard-Regular',
    }}>
    {text}
  </div>
}
