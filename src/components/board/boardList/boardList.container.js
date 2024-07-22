import BoardListUI from "./boardList.presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const BoardList = () => {
    const countPerPage = 10; // 한 페이지당 보여줄 게시글 개수

    const [posts, setPosts] = useState([]); // DB로부터 받아온 전체 게시글 배열
    const [paginatedPosts, setPaginatedPosts] = useState([]); // DB로부터 받아온 전체 게시글 배열 중, 현재 선택된 페이지를 기준으로 10개씩 잘라낸 10개의 요소가 들어있는 배열
    const [filteredPosts, setFileredPosts] = useState([]); // 검색어를 입력하여 걸러진 게시글 배열
    const [totalPage, setTotalPage] = useState(1); // 총 페이지 개수
    const [currentPage, setCurrentPage] = useState(1); // 현재 선택된 페이지 번호

    // input 창에 입력한 문자열을 받아오기 위한 ref 변수
    // searchInputRef.current 에는 input 태그가 들어있다
    // searchInputRef.current.value에는 입력창에 입력한 값이 들어있다
    const searchInputRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        axios
            .get("https://koreanjson.com/posts")
            .then((res) => {
                setPosts(res.data);
                setTotalPage(Math.ceil(res.data.length / countPerPage));

                // 최초로 그려져야하는 부분은 첫 페이지(게시글 10개)
                setPaginatedPosts(res.data.slice((currentPage - 1) * countPerPage, currentPage * countPerPage));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onMainMoveClick = () => {
        router.push("/");
    };

    const onTitleClick = (postId) => {
        // router.push(`/boards/${postId}`);
    };

    const onWriteBtnClick = () => {
        // router.push("/boards/new");
    };

    const onPageClick = (event, value) => {
        // console.log("event : ", event);
        // console.log("value : ", value);
        setCurrentPage(value);

        // 1페이지를 클릭하면 value에는 1이 들어있다
        // value 1 --> posts를 0 ~ 10(미만, 즉 9까지) 10개를 잘라내야 한다
        // value 2 --> 10 ~ 20(미만, 즉 19까지)
        // value 3 --> 20 ~ 30(미만, 즉 29까지)
        setPaginatedPosts(posts.slice((value - 1) * countPerPage, value * countPerPage));
    };

    const onSearchClick = () => {
        // 사용자가 입력한 문자열 값
        const seachTxt = searchInputRef.current.value;

        // 전체 게시글 목록에서 제목에 사용자가 입력한 문자열 값이 들어있는 게시글만 배열에 담아주기
        // (즉, 원본 posts 배열에서 사용자가 입력한 문자열이 제목에 포함되어있는 게시글만 뽑아서 새로운 배열 만들기)
        setFileredPosts(posts.filter((post) => post.title.includes(seachTxt)));

        // filteredPosts에는 특정 검색어가 포함된 요소들만 걸러져서 배열에 담겨있다
        // console.log(filteredPosts);

        // 검색어를 통해 골라낸 게시글들을 바탕으로 전체 페이지 재설정하기
        setTotalPage(Math.ceil(filteredPosts.length / countPerPage));
        setCurrentPage(1); // 검색어 입력 후 보여지는 첫 페이지
        setPaginatedPosts(filteredPosts.slice((currentPage - 1) * countPerPage, currentPage * countPerPage)); // 한 페이지당 보여지는 게시글 목록을 저장하는 공간
    };

    return (
        <BoardListUI
            countPerPage={countPerPage}
            paginatedPosts={paginatedPosts}
            totalPage={totalPage}
            currentPage={currentPage}
            searchInputRef={searchInputRef}
            onMainMoveClick={onMainMoveClick}
            onTitleClick={onTitleClick}
            onWriteBtnClick={onWriteBtnClick}
            onPageClick={onPageClick}
            onSearchClick={onSearchClick}
        />
    );
};

export default BoardList;
