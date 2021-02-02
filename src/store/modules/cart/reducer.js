import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { pokemon } = action;

        draft.push(pokemon);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const pokemonIndex = draft.findIndex((p) => p.id === action.id);

        if (pokemonIndex >= 0) {
          draft.splice(pokemonIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const pokemonIndex = draft.findIndex((p) => p.id === action.id);

        if (pokemonIndex >= 0) {
          draft[pokemonIndex].amount = Number(action.amount);
        }
      });
    }
    case '@cart/EMPTY_CART': {
      return produce(state, (draft) =>
        draft.filter((pokemon) => pokemon.type !== action.pokeType),
      );
    }
    default:
      return state;
  }
}
