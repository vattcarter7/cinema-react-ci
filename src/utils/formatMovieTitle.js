export default (title) => {
  if (title.includes('%')) {
    const newTitle = title.replace('%', 'percent');
    return newTitle.toLowerCase().replace(/ /g, '-');
  }
  return title.toLowerCase().replace(/ /g, '-');
};
