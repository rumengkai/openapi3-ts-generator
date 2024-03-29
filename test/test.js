const assert = require('assert');
const path = require('path');
const fs = require('fs');

const openAPI = require('../dist/index');

// const gen = async () => {
//   await openAPI.generateService({
//     schemaPath: `${__dirname}/example-files/swagger-get-method-params-convert-obj.json`,
//     servicesPath: './servers',
//   });

//   await openAPI.generateService({
//     schemaPath: `${__dirname}/example-files/swagger-file-convert.json`,
//     servicesPath: './file-servers',
//   });

//   await openAPI.generateService({
//     requestLibPath: "import request  from '@/request';",
//     schemaPath: `${__dirname}/example-files/swagger-custom-hook.json`,
//     servicesPath: './servers',
//     hook: {
//         // 自定义类名
//         customClassName: (tagName) => {
//             return /[A-Z].+/.exec(tagName);
//         },
//         // 自定义函数名
//         customFunctionName: (data) => {
//             let funName = data.operationId ? data.operationId : '';
//             const suffix = 'Using';
//             if (funName.indexOf(suffix) != -1) {
//                 funName = funName.substring(0, funName.lastIndexOf(suffix));
//             }
//             return funName;
//         },
//         // 自定义类型名
//         customTypeName: (data) => {
//           const { operationId } = data;
//           const funName = operationId
//             ? operationId[0].toUpperCase() + operationId.substring(1)
//             : '';
//           const tag = operationObject.tags && operationObject.tags[0];

//           return `${tag ? tag : ''}${funName}`;
//         }
//     }
//   });

//   // check 文件生成
//   const fileControllerStr = fs.readFileSync(path.join(__dirname, 'file-servers/api/fileController.ts'), 'utf8');
//   assert(fileControllerStr.indexOf('!(item instanceof File)') > 0);
//   assert(fileControllerStr.indexOf(`requestType: 'form',`) > 0);
//   assert(fileControllerStr.indexOf('Content-Type') < 0);
//   // await openAPI.generateService({
//   //   // requestLibPath: "import request  from '@/request';",
//   //   schemaPath: `http://82.157.33.9/swagger/swagger.json`,
//   //   servicesPath: './servers',
//   // });
//   // await openAPI.generateService({
//   //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
//   //   servicesPath: './servers',
//   //   mockPath: './mocks',
//   // });
//   // await openAPI.generateService({
//   //   schemaPath: 'http://petstore.swagger.io/v2/swagger.json',
//   //   servicesPath: './servers',
//   //   mockPath: './mocks',
//   // });
//   // await openAPI.generateService({
//   //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/LyDMjDyIhK/1611471979478-opa.json',
//   //   servicesPath: './servers',
//   //   mockPath: './mocks',
//   // });
//   // await openAPI.generateService({
//   //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/Zd7dLTHUjE/ant-design-pro.json',
//   //   servicesPath: './servers',
//   //   mockPath: './mocks',
//   // });
//   // await openAPI.generateService({
//   //   schemaPath: `${__dirname}/morse-api.json`,
//   //   servicesPath: './servers',
//   //   mockPath: './mocks',
//   // });
//   // await openAPI.generateService({
//   //   schemaPath: `${__dirname}/oc-swagger.json`,
//   //   servicesPath: './servers',
//   //   mockPath: './mocks',
//   // });
//   // await openAPI.generateService({
//   //   schemaPath: `${__dirname}/java-api.json`,
//   //   servicesPath: './servers',
//   //   mockPath: './mocks',
//   // });
// };
// gen();


openAPI.generateService({
  // schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
  requestLibPath: "@/utils/request",
  schemaPath: 'http://smart-ops-sbx.jd.local/v3/api-docs',
  servicesPath: './src',
  mockPath: './mocks',
  // apiPrefix: '',
});

// openAPI.generateService({
//   schemaPath: 'http://localhost:8800/v3/api-docs',
//   servicesPath: './services',
//   mockPath: './mocks',
//   // apiPrefix: '',
// });
