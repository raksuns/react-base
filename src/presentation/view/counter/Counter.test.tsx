import { afterEach, beforeEach, expect, it } from "@jest/globals"
import * as React from "react";
import Counter, { doIncrement } from "./Counter";
import { cleanup, fireEvent, render } from '@testing-library/react';

let element: HTMLElement;

beforeEach(() => {
  element = document.createElement("div");
  document.body.appendChild(element);
});

afterEach(() => {
  element.remove();
});

function renderCounter(props: any) {
  let utils: any;
  const children = jest.fn(stateAndHelpers => {
    utils = stateAndHelpers;
    return null;
  });

  return {
    ...render(<Counter />),
    children,
    // 이 부분으로 컴포넌트 내부의 증감과 횟수에 접근할 수 있는 방법을 제공합니다
    ...utils,
  };
}

it("Should Counter ", () => {
  const { container } = render(<Counter />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons[0].textContent).toBe('0');
  fireEvent.click(buttons[0]);

  expect(buttons[0].textContent).toBe('1')
  // expect(element.innerHTML).toMatchInlineSnapshot(`"<div>hello world!</div>"`);
});

test('Counter increments the count', () => {
  const { children, doIncrement } = renderCounter({});
  expect(children).toHaveBeenCalledWith(expect.objectContaining({ counter: 0 }));
  doIncrement();
  expect(children).toHaveBeenCalledWith(expect.objectContaining({ counter: 1 }));
});