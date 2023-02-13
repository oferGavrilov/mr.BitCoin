import { contactService } from "../services/contact.service.js"

export const contactStore = {
    state: {
        contacts: []
    },
    getters: {
        contacts({ contacts }) {
            return contacts
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
        updateContact(state, { contact }) {
            const idx = state.contacts.findIndex(currContact => currContact._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        }
    },
    actions: {
        async loadContacts({ commit }, filter) {
            try {
                const contacts = await contactService.query(filter)
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
        async saveContact({ commit }, contact) {
            try {
                const actionType = (contact._id) ? 'updateContact' : 'addContact'
                const saveContact = await contactService.save(contact)
                commit({ type: actionType, contact: saveContact })
            } catch (err) {
                throw err
            }
        },
    }
}