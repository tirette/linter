/*
* List all unique extensions in an array of files.
*/

const getExtensions = (files: string[]): string[] => {
  const extensions = files.map((file) => {
    const firstDot = file.indexOf('.');
    
    return file.substr(firstDot + 1);
  });

  return [...new Set(extensions)]
}

export default getExtensions;