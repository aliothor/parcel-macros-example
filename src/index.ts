import { css } from './css.ts' with {type: 'macro'};

async function init() {
    // @ts-expect-error
    const className = await css('color: red; &:hover { color: green }')

    document.querySelector('#app').className = className
}

init()