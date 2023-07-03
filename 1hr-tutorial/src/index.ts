let age: number = 20;
if (age < 50) age += 10;

let sales = 123_456_789;
let course = 'TypeScript';
let is_published: boolean = true;

let level;

function render(document: any) {
  console.log(document);
}

let numbers: number[] = [];

numbers.forEach((n) => n.toExponential());

let user: [number, string] = [1, 'Mosh'];

// const small = 1;
// const medium = 2;
// const large = 3;

// use 'const' to generate more optimized code!
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);
calculateTax(10_000, 2023);

let employee0: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};

// employee0.id = 3;

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') return weight * 2.2;
  return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize() {},
};

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hola!');
}

greet(null);
greet(undefined);

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday);
console.log(getCustomer(0)?.birthday);
console.log(getCustomer(1)?.birthday);
console.log(getCustomer(1)?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');
