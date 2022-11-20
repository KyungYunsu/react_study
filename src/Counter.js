import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick 을 통해 버튼 클릭 호출 함수 지정
          onClick={() => {
            // this.setState를 통해 state에 새로운 값 입력 가능
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("state +1 finish");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
