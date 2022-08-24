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
  | { type: 'READ_BY_ID'; id: number }
  | { type: 'DELETE_BY_ID'; id: number }
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

const create = (text: string): void => {};
const readAll = (): void => {};
const readById = (id: number): void => {};
const deleteById = (id: number): void => {};
const deleteAll = (): void => {};
const update = (
  id: number,
  text?: string,
  isDone?: boolean,
  category?: Category,
  tagId?: number,
  tagText?: string,
): void => {};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return create(action.text);
    case 'READ_ALL':
      return readAll();
    case 'READ_BY_ID':
      return readById(action.id);
    case 'DELETE_BY_ID':
      return deleteById(action.id);
    case 'DELETE_ALL':
      return deleteAll();
    case 'UPDATE':
      return update(
        action.id,
        action.text,
        action.isDone,
        action.category,
        action.tagId,
        action.tagText,
      );
    default:
      throw new Error('적절하지 않은 기능입니다.');
  }
};

const Todo = () => {
  return <div></div>;
};

export default Todo;
