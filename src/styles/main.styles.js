import styled from "@emotion/styled";

export const Img = styled.div`
    width: 400px;
    height: 300px;
    background: ${(props) => `url(${props.prefix}/sea.jpg) no-repeat center / contain`};
`;
