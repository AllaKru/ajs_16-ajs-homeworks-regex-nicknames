
import Validator from '../app';

test('работа класса', () => {
  const user = new Validator('Valeeva-156_Anna');

  expect(user.validateUsername()).toBeTruthy();
});

test('работа класса', () => {
  const user = new Validator('_Valeeva-156_Anna145');

  expect(user.validateUsername()).toBeFalsy();
});
test('работа класса', () => {
  const user = new Validator('Valeeva-1564_Anna');

  expect(user.validateUsername()).toBeFalsy();
});

test('работа класса', () => {
  const user = new Validator(' Князев');

  expect(user.validateUsername()).toBeFalsy();
});
