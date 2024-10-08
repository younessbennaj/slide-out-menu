type Picture = {
  src: string;
  alt: string;
  photographer: string;
  originalSource: string;
  aspectRatio: string;
};

function Picture({ data }: { data: Picture }) {
  return (
    <figure>
      <a href={data.originalSource} target="_blank" rel="noopener noreferrer">
        <img
          src={data.src}
          alt={data.alt}
          style={{ aspectRatio: data.aspectRatio }}
        />
      </a>
      <figcaption>
        Picture by <strong>{data.photographer}</strong>.
      </figcaption>
    </figure>
  );
}

function PicturesFeed({ pictures }: { pictures: Picture[] }) {
  return (
    <div className="pictures-feed-wrapper">
      {pictures.map((picture: Picture) => (
        <Picture key={picture.originalSource} data={picture} />
      ))}
    </div>
  );
}

export default PicturesFeed;
