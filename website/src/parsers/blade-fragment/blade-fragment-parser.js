import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'stillat-blade-parser/package.json';
import { BladeDocument } from 'stillat-blade-parser/out/document/bladeDocument';

const ID = 'blade-fragment-parser';

const defaultOptions = {};

/* startPosition: Position { index: 152, offset: 152, line: 10, char: 1 },
 * endPosition: Position { index: 160, offset: 160, line: 10, char: 9 },
 * index: 5,
 * embeddedIndex: 3,
 * refId: 'xxxxxxxx_xxxx_xxxx_xxxx_xxxxxxxxxxxx',
 * parameters: [],
 * isSelfClosing: false,
 * isClosingFragment: true,
 * name: 'script',
 * containsStructures: false
 */

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,
  locationProps: new Set(['startPosition', 'endPosition']),
  typeProps: new Set(['name']),
  // _ignoredProperties: new Set([]),

  loadParser(callback) {
    callback(new BladeDocument());
  },

  parse(bladeDocument, code) {
    bladeDocument.getParser();
    bladeDocument.loadString(code);
    return bladeDocument.getFragments();
  },

  getNodeName(node) {
    return node.name;
  },

  nodeToRange(node) {
    if (node.startPosition && node.endPosition) {
      return [node.startPosition.offset, node.endPosition.offset];
    }
  },
  //
  // opensByDefault(node, key) {
  //   return key === 'body' || key === 'what' || key === 'items';
  // },
};
