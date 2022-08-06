import name from 'random-names-generator';
import { v4 as id } from 'uuid';

const initialState = [
    {
        id: id(),
        person: name.random(),
        reason: 'Parked too close to me in the parking lot',
        forgiven: false
    },
    {
        id: id(),
        person: name.random(),
        reason: 'Did not brew another pot of coffee after drinking the last cup',
        forgiven: true
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Failed to wish me a happy birthday but ate my cake',
        forgiven: false
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Generally obnoxious and unrepentant about that fact',
        forgiven: true
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Cut me in line at Safeway and then made eye contact',
        forgiven: true
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Ate the last slice of pizza and left the box out',
        forgiven: true
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Brought "paper products" to a potluck',
        forgiven: true
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Talked over me when I was telling a story',
        forgiven: true
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Changed my playlist as soon as I left the room for 30 seconds',
        forgiven: true
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Spoiled the plot line for Avengers: Endgame',
        forgiven: true
      },
      {
        id: id(),
        person: name.random(),
        reason: 'Ate all of the vegan ham leftovers despite being labelled',
        forgiven: true
      }

];

export default initialState;