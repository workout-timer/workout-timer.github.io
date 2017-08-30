// @flow

export type Start = {
  +type: 'start'
}

export const start = (): Start => ({type: 'start'})

export type NextStep = {
  +type: 'nextStep'
}

export const nextStep = (): NextStep => ({type: 'nextStep'})

export type Action = Start | NextStep;
