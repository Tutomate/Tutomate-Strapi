'use strict';

/**
 * confirmed-case service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::confirmed-case.confirmed-case');
