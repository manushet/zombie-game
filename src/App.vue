<template>
    <gamestate-start-component v-if='uiState === "start"'>
        <h2>Which hooman do you want to be?</h2>
        <p 
            v-for='option in characterChoices' 
            :key='option'
            class='character-choices'>
            <input 
                type='radio' 
                :id='option' 
                :value='option' 
                v-model='characterInput'
                @change='pickCharacter'/>
            <label :for='option'>{{ option }}</label>
        </p>
        <button @click='startGame'>Start Game!</button>
    </gamestate-start-component>
    <gamestate-finish-component 
        v-else-if='uiState === "won" || uiState === "lost"'
        @resetCharacter='resetCharacter'>

    </gamestate-finish-component>
    <section v-else>
        <svg viewBox="0 -180 1628 1180" class="main">
            <defs>
                <clipPath id="bottom-clip">
                <rect class="bottom-clip-path" x="1131.5" y="546.5" width="406" height="1000" />
                </clipPath>
                <clipPath id="top-clip">
                <rect class="top-clip-path" x="1131.5" y="69.5" width="406" height="473" />
                </clipPath>
            </defs>

            <friend-component/>
            <score-component/>

            <component :is='characterComponentName'/>

            <text
                x="1000"
                y="930"
                style="font: normal 45px 'Recursive; text-transform: uppercase;"
                class="text"
            >{{ character }}</text>

            <path fill="#f0959f" d="M0 842h657v192H0z" />

            <g id="friendbubble">
                <path
                class="cls-45"
                d="M342.3 471.8h106.6c0 42.6-21.3 63.9-21.3 63.9 64 0 85.3-63.9 85.3-63.9h42.6c42.7 0 42.7-42.7 42.7-42.7s21.3-149.3 21.3-191.9-42.6-42.7-42.6-42.7H321c-42.7 0-42.7 42.7-42.7 42.7l21.4 191.9s0 42.7 42.6 42.7z"
                transform="translate(17)"
                />
                <path
                class="cls-20"
                d="M333.8 463.2h106.6c0 42.7-21.3 64-21.3 64 63.9 0 85.3-64 85.3-64H547c42.7 0 42.7-42.6 42.7-42.6s21.3-149.3 21.3-192-42.7-42.6-42.7-42.6H312.4c-42.6 0-42.6 42.6-42.6 42.6l21.3 192s0 42.6 42.7 42.6z"
                transform="translate(17)"
                />
            </g>

            <g id="alienbubble">
                <path
                class="cls-45"
                d="M948.3 344.5c-103.8 0-187.9 76.3-187.9 170.4s84.1 170.3 187.9 170.3a201.5 201.5 0 00100.5-26.4l87.4 26.4-29.1-79.2c18.4-26.4 29.1-57.6 29.1-91.1 0-94.1-84.1-170.4-187.9-170.4z"
                transform="translate(17)"
                />
                <path
                class="cls-20"
                d="M938.9 336C835.1 336 751 412.3 751 506.4s84.1 170.3 187.9 170.3a201.5 201.5 0 00100.5-26.4l87.4 26.4-29.1-79.2c18.4-26.4 29.1-57.6 29.1-91.1 0-94.1-84.1-170.4-187.9-170.4z"
                transform="translate(17)"
                />
            </g>
        </svg>

        <div class="friendtalk">
            <h3>{{ questions[questionIndex].question }}</h3>
        </div>
        <div class="zombietalk">
            <p 
                v-for='character in characterChoicesShuffled' 
                :key='character'
                class='character-choices'>
                <button @click='pickAnswer(character)'>{{ questions[questionIndex][character] }}</button>
            </p>            
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FriendComponent from './components/FriendComponent.vue';
import GamestateStartComponent from './components/GamestateStartComponent.vue';
import ScoreComponent from './components/ScoreComponent.vue';
import ArtistComponent from './components/ArtistComponent.vue';
import BakerComponent from './components/BakerComponent.vue';
import MechanicComponent from './components/MechanicComponent.vue';
import ZombieComponent from './components/ZombieComponent.vue';
import GamestateFinishComponent from './components/GamestateFinishComponent.vue';

export default {
    components: {
        GamestateStartComponent,
        FriendComponent,
        ScoreComponent,
        ArtistComponent,
        BakerComponent,
        MechanicComponent,
        ZombieComponent,
        GamestateFinishComponent
    },
    data: () => ({
        characterInput: "baker",
    }),
    computed: {
        ...mapState([
            'uiState', 
            'questions', 
            'questionIndex',
            'character', 
            'characterChoices',
        ]),
        characterComponentName() {
            return `${this.character}Component`;
        },
        characterChoicesShuffled() {
            return this.shuffle(this.characterChoices);
        }
    },
    methods: {
        ...mapActions(['updateUiState', 'updateCharacter', 'checkAnswer']),
        pickCharacter() {
            this.updateCharacter(this.characterInput);
        },
        startGame() {
            this.updateUiState('run');
        },
        pickAnswer(character) {
            this.checkAnswer(character);
        },
        shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;          
        },
        resetCharacter() {
            this.characterInput = 'baker';
        }
    },
}
</script>

<style lang="scss">

</style>