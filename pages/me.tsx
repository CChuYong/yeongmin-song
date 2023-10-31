import '../app/global.css';
import YeongMinLayout from "@/layouts/YeongMinLayout";
import Button from "@/components/Button";

export default function Index() {
    return <YeongMinLayout>
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
    </YeongMinLayout>
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
