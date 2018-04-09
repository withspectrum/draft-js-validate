// @flow
import validate from '../';
import { EditorState, convertToRaw } from 'draft-js';

it('should validate raw draft content state', () => {
  expect(validate(convertToRaw(EditorState.createEmpty().getCurrentContent()))).toEqual(true);
})
