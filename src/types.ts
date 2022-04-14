export type Transaction = {
  id: string;
  from: string;
  to: string;
  amount: string;
  token: string;
  tokenName: string;
};

export type Task = {
  description: string;
  done: boolean;
};

export type State = {
  transactions: {
    [key: string]: Transaction;
  };
  tasks: Task[];
};
