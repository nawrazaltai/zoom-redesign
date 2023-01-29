export default function Card({ props }) {
  const { icon, title } = props;
  return (
    <div className=" flex flex-col border-2 border-blue-200 p-1 rounded-lg items-center justify-center text-center md:p-3">
      <p className="text-3xl text-navy">{icon}</p>
      <h3 className="text-navy text-xl font-bold pt-1"> {title}</h3>
    </div>
  );
}
