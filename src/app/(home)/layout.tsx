export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12 w-full h-full">
      <div className="col-span-12 overflow-scroll scrollbar-hide h-full">
        <div className="grid-in-content scrollbar-hide h-full relative">
          {children}
        </div>
      </div>
    </div>
  );
}
