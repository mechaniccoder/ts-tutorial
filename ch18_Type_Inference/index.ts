const a = [null, 2, "string"];

// contextual typing
window.onmousedown = (event) => {
  // 이렇게 이벤트의 문맥을 추론해서 button property를 가질 수 있다.
  event.button;
};

window.onscroll = (event) => {
  // 스크롤 이벤트는 버튼을 통해서 발생하지는 않았을 것을 추론한다.
  event.button;
};
export {};
