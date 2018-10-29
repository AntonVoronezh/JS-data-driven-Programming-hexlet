
import { map, toString } from 'hexlet-pairs-data';
import { getAttribute, getName } from './tags';

const extract = tagsList => {
const tags = {
	a : "href",
	img : "src",
  link : "href"
};
const getValue = map(n => n.attributes[tags[getName(n)]], tagsList);
return getValue;
};
export default extract;
