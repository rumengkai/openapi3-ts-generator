const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: './openapi.json',
  servicesPath: './services',
});
