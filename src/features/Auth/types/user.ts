export type User = {
  name: string;
  lastName: string;
  birthDay: string;
};

export type UserWidthAge = User & {
  age: number;
};