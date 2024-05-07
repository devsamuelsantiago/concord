export default function ServerCircle({
  bgColor,
  notification,
  children,
}: Readonly<{
  bgColor: string;
  notification?: boolean;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "flex justify-center items-center rounded-full w-12 h-12 hover:cursor-pointer hover:scale-110 active:scale-125 transition-all duration-500 " +
        bgColor
      }
    >
      {notification && (
        <div className="w-2 h-2 rounded-full bg-white absolute -translate-x-8"></div>
      )}
      <span>{children}</span>
    </div>
  );
}
