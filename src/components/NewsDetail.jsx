/* eslint-disable react/prop-types */
export default function NewsDetail({ detail, onBack }) {
  return (
    <div>
      <button className="btn" onClick={onBack}>
        Back
      </button>
      <h1>{detail.title}</h1>
      <p>
        {detail.author} - {detail.date}
      </p>
      {detail.categories.map((category, index) => (
        <button key={index} className="btn">
          {category}
        </button>
      ))}
      <div>
        {detail.content.map((item, index) =>
          item.startsWith("https://") ? (
            <img className="foto" key={index} src={item} alt="image" />
          ) : (
            <p className="text-berita" key={index}>
              {item}
            </p>
          )
        )}
      </div>
    </div>
  );
}
