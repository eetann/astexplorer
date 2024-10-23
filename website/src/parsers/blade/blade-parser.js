import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'stillat-blade-parser/package.json';
import { BladeDocument } from 'stillat-blade-parser/out/document/bladeDocument';

const ID = 'blade-parser';

const defaultOptions = {};

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,
  locationProps: new Set(['startPosition', 'endPosition']),
  typeProps: new Set(['constructor.name']),
  _ignoredProperties: new Set([
    'refId',
    'parentIndex',
    'parentTypeIndex',
    'parent',
    'originalAbstractNode',
    'parser', // 含めるとフリーズする
  ]),

  loadParser(callback) {
    callback(new BladeDocument());
  },

  parse(bladeDocument, code) {
    bladeDocument.getParser();
    bladeDocument.loadString(code);
    return bladeDocument.getRenderNodes();
  },

  getNodeName(node) {
    return node.constructor.name;
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
