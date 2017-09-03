export default (...classNames) => Array.from(new Set(classNames
  .map(className => className.split(/\s+/))
  .reduce((all, className) => all.concat(className), []))
  .keys())
  .join(' ');
