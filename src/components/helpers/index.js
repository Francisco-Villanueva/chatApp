export const formatDate = (obj) => {
  const date = new Date(obj.seconds * 1000);
  const time = `${date.getHours()}:${date.getMinutes()}`;
  const options = {
    month: "long",
    day: "numeric",
  };
  const newDate = date.toLocaleDateString("en-US", options);

  return `${newDate} - ${time}`;
};
