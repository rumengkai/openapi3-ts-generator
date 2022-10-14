const openAPI = require('../dist/index');

openAPI.generateService({
  schemaPath: './swagger.json',
  servicesPath: './services',
});
