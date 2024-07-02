import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
export const readJSON = (path) => require(path);

export const formatText = (text) => text.toLowerCase().replace(/\s+/g, '');
