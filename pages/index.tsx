import '../app/global.css';
import {Building, Folder, GithubCircle, Instagram, LinkedIn, UserCircle} from 'iconoir-react';

export default function Index() {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh'
    }}>
        <div className="flex flex-row justify-center items-center grow gap-20">
            <span className="text-8xl">🛠️</span>
            <div className="flex flex-col text-slate-50">
                <span className="text-7xl">Under Construction</span>
                <span className="text-5xl font-regular">Check Back Later!</span>
            </div>
        </div>
    </div>
}

function Sidebar() {
    return <div className="h-screen w-20 bg-stone-900">
        <div className="flex flex-col justify-between items-center py-5 h-screen">
            <div className="flex flex-col items-center gap-5">
                <UserCircle className="text-slate-50 w-10 h-10"/>
                <Building className="text-slate-50 h-11 w-14"/>
                <Folder className="text-slate-50 w-10 h-10"/>
            </div>
            <div className="flex flex-col items-center gap-5">
                <Instagram className="text-slate-50 w-10 h-10"/>
                <LinkedIn className="text-slate-50 h-11 w-14"/>
                <GithubCircle className="text-slate-50 w-10 h-10"/>
            </div>
        </div>

    </div>
}

interface ButtonProps {
    text: string
}

function Button({text}: ButtonProps) {
    return <div
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

function CopyRight() {
    return <div className="absolute top-0 right-0 text-slate-50 pr-10 pt-5">
        <span>ⓒ 2023 CChuYong</span>
    </div>
}

function SlideToNext() {
    return <div className="absolute bottom-0 right-0 text-slate-50 pr-10 pb-10 text-1xl [writing-mode:vertical-lr]">
        <span>SLIDE TO NEXT &gt;</span>
    </div>
}
