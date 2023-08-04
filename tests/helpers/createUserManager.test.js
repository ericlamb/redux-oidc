import 'babel-polyfill';
import '../setup';
import createUserManager from '../../src/helpers/createUserManager';
import expect from 'expect';
import sinon from 'sinon';

describe('helper - createUserManager()', () => {
  let userManagerStub;

  beforeEach(() => {
    userManagerStub = sinon.fake((config) => ({ config }));
    createUserManager.__Rewire__('UserManager', userManagerStub);
  });

  afterEach(() => {
    createUserManager.__ResetDependency__('UserManager');
  });

  it('should return an UserManager instance', () => {
    const config = { some: 'config' };
    const userManager = createUserManager(config);

    expect(typeof(userManager)).toEqual('object');
    expect(userManagerStub.calledWith(config)).toEqual(true);
  });
});
