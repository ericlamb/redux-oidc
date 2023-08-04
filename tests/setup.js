import { JSDOM } from 'jsdom';
import StorageShim from 'node-storage-shim';

const DEFAULT_HTML = '<html><body></body></html>';

const dom = new JSDOM(DEFAULT_HTML);
global.document = dom.document;

global.window = dom.window;

global.navigator = dom.navigator;

Object.defineProperty(window, 'localStorage', {
    value: new StorageShim()
  });

global.localStorage = window.localStorage;
