import '../app/global.css';
import YeongMinLayout from "@/layouts/YeongMinLayout";

export default function Project() {
    return <YeongMinLayout>
        <CopyRight/>
        <div className="flex flex-row justify-evenly items-center grow">

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
