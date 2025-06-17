import { UnprotectedPage } from "@/components/CheckAuth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UnprotectedPage>
      <main className="p-3 lg:p-0 flex justify-center items-center flex-col min-h-dvh h-dvh overflow-auto">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#DC8C77,transparent)]"></div>
        </div>
        {children}
      </main>
    </UnprotectedPage>
  );
}
