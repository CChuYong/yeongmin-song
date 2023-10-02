import '../app/global.css';

export default function Index() {
  return <div style={{
    display: 'flex',
    flexDirection: 'row'
  }}>
    <Sidebar/>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      color: '#ffffff',
    }}>
      <div className="w-40 h-2 bg-white"/>
      <div className="h-2"/>
      <span className="text-6xl">Welcome To</span>
      <span className="text-7xl">YEONGMIN SONG</span>
      <div className="h-3"/>
      <span className="text-5xl" style={{fontFamily: 'Pretendard-Regular'}}>SERVER & INFRA ENGINEER</span>
      <div className="h-11"/>
      <div className="flex flex-row gap-4">
        <Button text={"PROJECTS"}/>
        <Button text={"CAREER"}/>
      </div>
    </div>
  </div>
}

function Sidebar() {
  return <div style={{
    width: '5.8%',
    height: '100vh',
    backgroundColor: '#111111'
  }}>

  </div>
}

function Button({text}: {text: string}) {
  return <div
    className="w-fit"
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
