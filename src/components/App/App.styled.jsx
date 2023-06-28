import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

const PhonebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 800px;
  padding: 20px;

  background-color: #332b00;
  border: 2px solid #f2ab26;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #f2ab26;
`;

const ListTitle = styled.h2`
  font-size: 40px;
  color: #f2ab26;
  margin-top: 20px;
`;

export { Container, PhonebookContainer, Title, ListTitle };
