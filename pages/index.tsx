import '../app/global.css';
import {Building, Folder, GithubCircle, Instagram, LinkedIn, UserCircle} from 'iconoir-react';

export default function Index() {
    return <div style={{
        display: 'flex',
        flexDirection: 'row'
    }}>
        <Sidebar/>
        <CopyRight/>
        <div className="flex flex-row justify-evenly items-center grow">
            <div className="flex flex-col text-slate-50">
                <div className="w-40 h-2 bg-white"/>
                <div className="h-2"/>
                <span className="text-6xl">Welcome To</span>
                <span className="text-7xl">YEONGMIN SONG</span>
                <div className="h-3"/>
                <span className="text-5xl font-regular">SERVER & INFRA ENGINEER</span>
                <div className="h-11"/>
                <div className="flex flex-row gap-4">
                    <Button text={"PROJECTS"}/>
                    <Button text={"CAREER"}/>
                </div>
            </div>
            <div>
                {/*<Image src={"/yeongmin.png"} width={300} height={300} className="w-[28rem] h-[28rem]"/>*/}
                <div/>
            </div>
        </div>
        <SlideToNext/>

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

function Button({text}: { text: string }) {
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
