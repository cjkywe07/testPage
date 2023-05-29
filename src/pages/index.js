import PortfolioContext from "@/content/content";
import { useRouter } from "next/router";
import { useContext } from "react";

const Home = () => {
    const { prefix } = useContext(PortfolioContext);
    const router = useRouter();

    const onBoardListMoveClick = () => {
        router.push("/boards");
    };

    return (
        <>
            <p>메인화면입니다</p>
            <button onClick={onBoardListMoveClick}>게시글 목록 이동</button>
            {/* <div style={{ width: "400px", height: "300px", background: "url(/night.jpg) no-repeat center / contain" }}></div> */}
            <div
                style={{ width: "400px", height: "300px", background: `url(${prefix}/night.jpg) no-repeat center / contain` }}
            ></div>
        </>
    );
};

export default Home;
