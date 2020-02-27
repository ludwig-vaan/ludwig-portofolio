import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0 3rem;
  border-top: 1px solid #e7ebed;
`;

export const Headline = styled.h2`
  font-weight: 600;
  margin: 0.5rem 0 0;
  font-size: 16px;
  line-height: 24px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  font-size: 14px;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div:last-child {
    flex: 1;
    margin-left: 0.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 3em;
  height: 3em;
  background: #e7ebed;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`;
