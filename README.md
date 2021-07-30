react-base
- clean
- TDD


- Jest: All-in-one 테스팅 라이브러리 [https://www.daleseo.com/jest-basic/]
Jest는 페이스북에서 만들어서 React와 더불어 많은 자바스크립트 개발자들로 부터 좋은 반응을 얻고 있는 테스팅 라이브러리입니다.
출시 초기에는 프론트앤드에서 주로 쓰였지만 최근에는 백앤드에서도 기존의 자바스크립트 테스팅 라이브러리를 대체하고 있습니다.

Jest 이전에는 자바스크립트 코드를 테스트하라면 여러가지 테스팅 라이브러리를 조합해서 사용하곤 했었습니다.
예를 들어, Mocha나 Jasmin을 Test Runner로 사용하고, Chai나 Expect와 같은 Test Mathcher를 사용했으며,
또한 Sinon과 Testdouble 같은 Test Mock 라이브러리도 필요했었습니다.
이 라이브러리들은 굉장히 유사하지만 살짝씩 다른 API를 가지고 있었기 때문에, 여러 프로젝트에 걸쳐서 일하는 자바스크립트 개발자들에게 혼란을 주기도 했었습니다.
하지만 Jest는 라이브러리 하나만 설치하면, Test Runner와 Test Mathcher 그리고 Test Mock 프레임워크까지 제공해주기 때문에 상당히 편리하게 느껴지는 것 같습니다.

jest는 기본적으로 test.js로 끝나거나, __test__ 디렉터리 안에 있는 파일들은 모두 테스트 파일로 인식합니다.
만약 특정 테스트 파일만 실행하고 싶은 경우에는 npm test <파일명 이나 경로>를 입력하면 됩니다.


[https://www.daleseo.com/react-testing-library/]

- Enzyme은 실제 브라우저 DOM이 아닌, React가 만들어내는 가상 DOM을 기준으로 테스트를 작성해야 합니다.
 따라서 테스트 대상 React 컴포넌트에 어떤 prop이 넘어가고, 현재 state이 어떻게 되는지에 대해서 검증하기 용이합니다.

- React Testing Library는 Behavior Driven Test 방밥론을 따르는 테스트를 작성하는데 적합합니다.
 왜냐하면 React Testing Library는 jsdom이라는 라이브러를 통해 실제 브라우저 DOM을 기준으로 테스트를 작성하게 됩니다.
 따라서 어떤 React 컴포넌트를 사용하는지는 의미가 없으며, 결국 사용자 브라우저에서 랜더링하는 실제 HTML 마크업의 모습이 어떤지에 대해서 테스트하기 용이합니다.