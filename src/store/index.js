import { createStore } from 'vuex';
import mutations from './mutations';

const {UPDATE_CHARACTER, UPDATE_UI_STATE, SET_SCORE, RESET_GAME} = mutations;

export default createStore({
    state: {
        uiState: 'start',
        characterChoices: ['baker', 'mechanic', 'artist'],
        character: 'baker',
        score: 0,
        questionIndex: 0,
        questions: [
            {
                question: "What's your dog's name?",
                baker: "Woofgang Puck",
                mechanic: "Alf",
                artist: "Salvador Dogi",
            },
            {
                question: "What's your favorite hobby?",
                baker: "Extreme ironing",
                mechanic: "Bacon santa cosplay",
                artist: "Mimosas",
            },
            {
                question: "What's your favorite color?",
                baker: "turquoise",
                mechanic: "yellow",
                artist: "transparent",
            },
            {
                question: "Is cereal soup?",
                baker: "You can't be serieal",
                mechanic: "Yes, I am Jason Lengstorf",
                artist: "wut",
            },
            {
                question: "What's the most imaginative insult you can come up with?",
                baker: "You're a substitute teacher with no lesson plan",
                mechanic: "Yer face is a melted welly",
                artist: "You eat buttons off the remote",
            },
            {
                question: "If peanut butter wasn’t called peanut butter, what would it be called?",
                baker: "legoome",
                mechanic: "brown paste",
                artist: "groundnut smoosh",
            },
        ],
    },
    getters: {
    },
    mutations: {
        [UPDATE_CHARACTER](state, character) {
            state.character = character;
        },
        [UPDATE_UI_STATE](state, uiState) {
            state.uiState = uiState;
        },
        [SET_SCORE](state, opt) {
            (opt === 'up') ? state.score += 15 : state.score -= 15;

            if (state.questionIndex < state.questions.length - 1) {
                state.questionIndex += 1;
            }
            else {
                state.uiState = (parseInt(state.score) > 0) ? 'won' : 'lost';
            }
        },
        [RESET_GAME](state) {
            state.uiState = 'start';
            state.character = 'baker';
            state.score = 0;
            state.questionIndex = 0;
        },        
    },
    actions: {
        updateCharacter({commit}, character) {
            commit(UPDATE_CHARACTER, character);
        },
        updateUiState({commit}, uiState) {
            commit(UPDATE_UI_STATE, uiState);
        },
        checkAnswer({commit, state}, character) {
            if (character === state.character) {
                commit(SET_SCORE, 'up');
            }
            else {
                commit(SET_SCORE, 'down');
            }
        },
        resetGame({commit}) {
            commit(RESET_GAME);
        }
    },
    modules: {
    }
})
