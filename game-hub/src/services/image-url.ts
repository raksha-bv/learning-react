const croppedImageUrl = (url: string) => {
  const target = "media/";
  const cropIndex = url.indexOf(target) + target.length;
  return url.slice(0, cropIndex) + "crop/600/400/" + url.slice(cropIndex);
};
export default croppedImageUrl;
