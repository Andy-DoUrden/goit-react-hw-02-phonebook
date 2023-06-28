import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 600px;
  margin-top: 20px;
`;

const InputName = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  font-size: 20px;
  color: #f2ab26;
`;

const FilterValue = styled.input`
  width: 240px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  transition: 300ms;

  :hover,
  :focus {
    border: 2px solid #00f90f;
  }
`;

export { Form, InputName, FilterValue };
