import { contactService } from "../services/contact.service.js"

export const contactStore = {
    state: {
        contacts: [],
        filter: contactService.getDefaultFilter()
    },
    getters: {
        contacts({ contacts }) {
            return contacts
        },
        filter({ filter }) {
            return filter
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        addContact(state, { contact }) {
            state.contacts.push(contact)
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        updateProduct(state, { contact }) {
            const idx = state.contacts.findIndex(currContact => currContact._id === contact._id)
            state.contacts.splice(idx, 1, product)
        },
        setFilter(state, { filter }) {
            state.filter = filter
        }
    },
    actions: {
        async loadContacts({ commit }) {
            try {
                const contacts = await contactService.query()
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                throw err
            }
        },
        async removeContact({ commit }, contactId) {
            try {
                await contactService.remove(contactId)
                commit({ type: 'removeContact', contactId})
            } catch (err) {
                throw err
            }
        },
        async saveProduct({ commit }, { contact }) {
            try {
                const actionType = (contact._id) ? 'updateProduct' : 'addProduct'
                const saveContact = await contactService.save(contact)
                commit({ type: actionType, contact: saveContact })
            } catch (err) {
                throw err
            }
        },
        setFilter({ commit }, { filter }) {
            commit({ type:'setFilter', filter })
        }
    }
}