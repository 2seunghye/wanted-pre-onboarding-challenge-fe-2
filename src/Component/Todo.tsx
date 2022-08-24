import React from 'react';

type Category = 'sample1' | 'sample2' | 'sample3';

type Tag = {
  tagId: number;
  tagText: string;
};

type State = {
  id: number;
  text: string;
  isDone: boolean;
  category: Category;
  tags?: Tag[];
};

type Action =
  | { type: 'CREATE'; text: string }
  | { type: 'READ_ALL' }
  | { type: 'READ_BY_ID'; id?: number }
  | { type: 'DELETE'; id?: number }
  | { type: 'DELETE_ALL' }
  | {
      type: 'UPDATE';
      id: number;
      text?: string;
      isDone?: boolean;
      category?: Category;
      tagId?: number;
      tagText?: string;
    };

const Todo = () => {
  return <div></div>;
};

export default Todo;
