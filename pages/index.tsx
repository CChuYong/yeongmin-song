import '../app/global.css';
import Button from "@/components/Button";

export default function Index() {
    return <div className="flex flex-row h-screen">
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

