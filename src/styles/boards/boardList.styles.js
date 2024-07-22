import styled from "@emotion/styled";

export const BoardListWrap = styled.div`
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Line = styled.div`
    width: 135px;
    height: 3px;
    background-color: #ffa0b0;
    margin-top: 15px;
`;

export const BoardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`;

export const SearchWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const BoardSearch = styled.input`
    width: 180px;
    border: 1px solid silver;
    outline: none;
    border-radius: 20px;
    padding: 5px 15px;
    margin-right: 5px;
`;

export const SearchBtn = styled.button`
    font-size: 16px;
    padding: 5px 12px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: #ffe1e6;
`;

export const BoardTableHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid silver;
    padding: 10px 0;
    font-weight: bold;

    & > p:first-of-type {
        width: 10%;
    }
    & > p:nth-of-type(2) {
        width: 45%;
    }
    & > p:nth-of-type(3) {
        width: 15%;
    }
    & > p:nth-of-type(4) {
        width: 15%;
    }
    & > p:nth-of-type(5) {
        width: 15%;
    }
`;

export const BoardTableRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid silver;
    padding: 10px 0;

    & > p:first-of-type {
        width: 10%;
    }
    & > p:nth-of-type(2) {
        width: 45%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;
        cursor: pointer;
    }
    & > p:nth-of-type(3) {
        width: 15%;
    }
    & > p:nth-of-type(4) {
        width: 15%;
    }
    & > p:nth-of-type(5) {
        width: 15%;
    }
`;

export const WriteBtn = styled.button`
    align-self: flex-end;
    margin-top: 25px;
    padding: 6px 14px;
    border: none;
    border-radius: 5px;
    background-color: #ffc0cb;
    font-size: 16px;
    cursor: pointer;
`;
