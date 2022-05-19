import styledComponents from 'styled-components';

const Title = styledComponents.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;  
`; // 재사용 불가(js파일에 따로 만들면 재사용 가능)

function App() {
  return (
    <div>
      <Title>헬로</Title>
    </div>
  );
}

export default App;
