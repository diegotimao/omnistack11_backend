const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () =>{
  it('shoud generate an unique ID', () => {
  const id = generateUniqueId();


    expect(id).toHeveLength(8);


  })
});