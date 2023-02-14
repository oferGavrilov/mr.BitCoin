import Vuex from 'vuex'
import {contactStore} from './contact.store'

export const myStore = Vuex.createStore({
    strict: true,
    modules: {
        contactStore
    }
})

myStore.subscribe((cmd, state) => {
    console.log('**** Store state changed: ****')
    console.log('Command:', cmd.payload)
    console.log('storeState:\n', state)
    console.log('*******************************')
})