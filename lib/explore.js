"use strict";

/**
 * {@link https://tavrn.io/docs/api/resources/explore}
 * @module explore
 */
module.exports = api => {
  return {
    /**
     * Retrieve a list of explore streams.
     *
     * @see https://tavrn.io/docs/api/resources/explore#get-posts-streams-explore
     * @example
     * const { meta, data } = await tavrn.explore();
     * @param {Object} [params] - Additional URI parameters
     * @returns {Promise}
     */
    explore(params = {}) {
      return api.request("/posts/stream/explore", {
        params: params
      });
    },

    /**
     * New conversations just starting on tavrn.io
     *
     * @example
     * const { meta, data } = await tavrn.conversations();
     * @param {Object} [params] - Additional URI parameters
     * @returns {Promise}
     */
    conversations(params = {}) {
      return api.request("/posts/stream/explore/conversations", {
        params: params
      });
    },

    /**
     * Posts with photos on tavrn.io
     *
     * @example
     * const { meta, data } = await tavrn.photos();
     * @param {Object} [params] - Additional URI parameters
     * @returns {Promise}
     */
    photos(params) {
      return api.request("/posts/stream/explore/photos", {
        params: params
      });
    },

    /**
     * Posts trending on tavrn.io
     *
     * @example
     * const { meta, data } = await tavrn.trending();
     * @param {Object} [params] - Additional URI parameters
     * @returns {Promise}
     */
    trending(params) {
      return api.request("/posts/stream/explore/trending", {
        params: params
      });
    },

    /**
     * Posts with missed conversations
     *
     * @example
     * const { meta, data } = await tavrn.missedConversations();
     * @param {Object} [params] - Additional URI parameters
     * @returns {Promise}
     */
    missedConversations(params) {
      return api.request("/posts/stream/explore/moststarred", {
        params: params
      });
    }
  };
};
