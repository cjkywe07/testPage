import {
    BoardHeader,
    BoardListWrap,
    BoardSearch,
    BoardTableHeader,
    BoardTableRow,
    Line,
    SearchBtn,
    SearchWrap,
    WriteBtn,
} from "@/styles/boards/boardList.styles";
import { Pagination } from "@mui/material";

const BoardListUI = (props) => {
    const {
        countPerPage,
        paginatedPosts,
        totalPage,
        currentPage,
        searchInputRef,
        onMainMoveClick,
        onTitleClick,
        onWriteBtnClick,
        onPageClick,
        onSearchClick,
    } = props;

    return (
        <>
            <button onClick={onMainMoveClick}>메인 이동</button>

            <BoardListWrap>
                <h1>게시글 목록</h1>
                <Line />

                <BoardHeader>
                    <p>게시글</p>
                    <SearchWrap>
                        <BoardSearch ref={searchInputRef} />
                        <SearchBtn onClick={onSearchClick}>검색</SearchBtn>
                    </SearchWrap>
                </BoardHeader>

                <BoardTableHeader>
                    <p>NO</p>
                    <p>제목</p>
                    <p>작성자id</p>
                    <p>작성일자</p>
                    <p>수정일자</p>
                </BoardTableHeader>

                {paginatedPosts.map((v, index) => (
                    <BoardTableRow key={v.id}>
                        <p>{(currentPage - 1) * countPerPage + (index + 1)}</p>
                        <p
                            onClick={() => {
                                onTitleClick(v.id);
                            }}
                        >
                            {v.title}
                        </p>
                        <p>{v.UserId}</p>
                        <p>{v.createdAt}</p>
                        <p>{v.updatedAt}</p>
                    </BoardTableRow>
                ))}

                <WriteBtn onClick={onWriteBtnClick}>글쓰기</WriteBtn>

                {/* count: 총 페이지 개수, page: 현재 선택된 페이지 번호, onChange: 다른 페이지 번호 클릭했을 때 실행될 함수 */}
                <Pagination count={totalPage} page={currentPage} onChange={onPageClick} />
            </BoardListWrap>
        </>
    );
};

export default BoardListUI;
