<template>
    <div class="modal">
        <div class="modal-content">
            <section v-if='uiState === "won"'>
                <h3>Congratulations, you've won!</h3>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,202,40); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <path d="M 82.583 20.258 C 84.779 25.758 86 31.752 86 38.035 C 86 64.525 64.525 86 38.035 86 c -6.283 0 -12.277 -1.221 -17.777 -3.417 C 27.358 87.266 35.858 90 45 90 c 24.853 0 45 -20.147 45 -45 C 90 35.858 87.266 27.358 82.583 20.258 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,182,34); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 63.085 57.621 C 59.197 63.477 52.556 67.345 45 67.345 s -14.197 -3.868 -18.085 -9.724 H 63.085 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 45 69.345 c -7.954 0 -15.337 -3.969 -19.751 -10.617 c -0.408 -0.614 -0.445 -1.402 -0.097 -2.052 c 0.349 -0.649 1.026 -1.055 1.763 -1.055 h 36.17 c 0.737 0 1.414 0.405 1.763 1.055 c 0.348 0.649 0.312 1.438 -0.097 2.052 C 60.337 65.376 52.953 69.345 45 69.345 z M 31.129 59.621 c 3.656 3.636 8.614 5.724 13.871 5.724 s 10.215 -2.088 13.871 -5.724 H 31.129 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 25.238 42.268 c -0.68 0 -1.343 -0.347 -1.718 -0.973 c -0.567 -0.948 -0.259 -2.176 0.688 -2.743 l 7.424 -4.444 l -7.424 -4.444 c -0.948 -0.567 -1.256 -1.795 -0.688 -2.743 c 0.566 -0.948 1.794 -1.258 2.743 -0.688 l 10.291 6.16 c 0.604 0.361 0.973 1.013 0.973 1.716 s -0.369 1.355 -0.973 1.716 l -10.291 6.16 C 25.941 42.176 25.587 42.268 25.238 42.268 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 64.762 42.268 c -0.35 0 -0.703 -0.092 -1.025 -0.285 l -10.29 -6.16 c -0.604 -0.361 -0.973 -1.013 -0.973 -1.716 s 0.369 -1.355 0.973 -1.716 l 10.29 -6.16 c 0.95 -0.567 2.176 -0.259 2.743 0.688 c 0.567 0.948 0.259 2.176 -0.688 2.743 l -7.424 4.444 l 7.424 4.444 c 0.947 0.567 1.256 1.795 0.688 2.743 C 66.105 41.92 65.442 42.268 64.762 42.268 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </svg>            
            </section>
            <section v-else>
                <h3>Sorry, you've lost!</h3>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,202,40); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <path d="M 82.583 20.258 C 84.779 25.758 86 31.752 86 38.035 C 86 64.525 64.525 86 38.035 86 c -6.283 0 -12.277 -1.221 -17.777 -3.417 C 27.358 87.266 35.858 90 45 90 c 24.853 0 45 -20.147 45 -45 C 90 35.858 87.266 27.358 82.583 20.258 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,182,34); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <circle cx="31" cy="35.55" r="5" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <circle cx="59" cy="35.55" r="5" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <path d="M 55.187 68.794 c -3.889 0 -7.776 -1.779 -11.557 -5.338 c -6.015 -5.661 -11.618 -5.659 -17.632 0 c -0.805 0.76 -2.07 0.719 -2.827 -0.085 c -0.757 -0.805 -0.719 -2.07 0.086 -2.827 c 7.561 -7.118 15.554 -7.116 23.115 0 c 6.014 5.66 11.617 5.66 17.631 0 c 0.806 -0.758 2.07 -0.719 2.827 0.085 c 0.758 0.805 0.719 2.07 -0.085 2.827 C 62.963 67.015 59.075 68.794 55.187 68.794 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(96,67,35); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </svg>
            </section>
            <button @click='startAgain'>Let's play again!</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'GamestateFinishComponent',
    emits: ['resetCharacter'],
    computed: {
        ...mapState(['uiState']),
    },  
    methods: {
        ...mapActions(['resetGame']),
        startAgain() {
            this.resetGame();
            this.$emit('resetCharacter');
        }
    } 
    
}
</script>

<style lang="scss" scoped>
    .modal-content {
        text-align: center;
    }
    button {
        margin-top: 2em;
    }
</style>
