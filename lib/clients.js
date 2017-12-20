"use strict";

/**
 * {@link https://tavrn.io/docs/api/resources/clients}
 * @module clients
 */
module.exports = api => {
  return {
    /**
     * Retrieve details on a public client.
     * @see https://tavrn.io/docs/api/resources/clients#get-users-id-clients
     * @example
     * const { meta, data } = await tavrn.client("8eIbTW60HZ0pqI5IxTj1wJKrayWlmYdk");
     * @param {string} clientId - A client id
     * @returns {Promise}
     */
    client(clientId) {
      return api.request(`/clients/${clientId}`);
    },

    /**
     * Retrieve a list of active clients created by a user.
     * @see https://tavrn.io/docs/api/resources/clients#get-clients-id
     * @example
     * const { meta, data } = await tavrn.clientsByUser("@kwood");
     * @param {string|number} userId - A user id
     * @returns {Promise}
     */
    clientsByUser(userId) {
      return api.request(`/users/${userId}/clients`);
    }
  };
};
