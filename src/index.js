// @flow
import t, { reify } from 'flow-runtime';
import type { Type } from 'flow-runtime';
import type { RawDraftContentState } from '../node_modules/draft-js/lib/RawDraftContentState.js.flow';

const RawDraftContentStateType = (reify: Type<RawDraftContentState>);

function draftValidate(input: ?RawDraftContentState): bool {
  const validation = t.validate(RawDraftContentStateType, input);
  console.log(validation.errors);
  return validation.hasErrors();
}

export default draftValidate;
