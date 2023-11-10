import Search from "./Search";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <div className="p-4 border-2 border-gray-600 w-full items-center flex justify-center">
        <Search />
      </div>
      <div>{children}</div>
    </main>
  );
}
