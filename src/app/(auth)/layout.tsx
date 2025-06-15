export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-3 lg:p-0 flex justify-center items-center flex-col min-h-dvh h-dvh overflow-auto">
<div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>  
    {children}
    </main>
  );
}
