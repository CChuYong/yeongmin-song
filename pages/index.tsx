import '../app/global.css';
import {Building, Folder, GithubCircle, Instagram, LinkedIn, UserCircle} from 'iconoir-react';

export default function Index() {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh'
    }}>
        <div className="flex flex-row justify-center items-center grow gap-36">
            <span className="text-9xl">🛠️</span>
            <div className="flex flex-col text-slate-50">
                <span className="text-7xl">Under Construction</span>
                <span className="text-5xl font-regular">Check Back Later!</span>
                <div className="h-11"/>
                <Button text={"Go To Temporary Portfolio Page"} onTap={() => location.href = 'https://about.yeongmin.kr/'}/>
            </div>
        </div>
    </div>
}

interface ButtonProps {
    text: string,
    onTap?: () => void,
}

function Button({text, onTap}: ButtonProps) {
    return <div
        onClick={onTap}
        className="w-fit button-box"
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
