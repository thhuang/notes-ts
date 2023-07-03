import * as _ from 'lodash';

async function hello() {
  return 'world';
}

const url = new URL('...');

let lucky: number;

lucky = '23';
lucky = 23;

type Style = 'bold' | 'italic';

let font: Style;

font = 'something';

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person: Person = {
  first: 'Jeff',
  last: 'Delaney',
};

const person2: Person = {
  first: 'Usain',
  last: 'Bolt',
  fast: true,
};

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

function powV2(x: number, y: number): void {
  Math.pow(x, y).toString();
}

const arr: number[] = [];
arr.push(1);
arr.push('23');
arr.push(false);

type MyList1 = [number, string, boolean];
const arr1: MyList1 = [1, '23', false];

type MyList2 = [number?, string?, boolean?];
const arr2: MyList2 = [];
arr2.push(1);
arr2.push('23');
arr2.push(false);

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);
