const Title = ({ Title, Link }: { Title: string; Link: string }) => {
  return (
    <div className="text-2xl font-bold px-4 mb-6 flex justify-between">
      <h1>{Title}</h1>
      <button className="text-lg text-blue-500">{Link}</button>
    </div>
  );
};

export default Title;
