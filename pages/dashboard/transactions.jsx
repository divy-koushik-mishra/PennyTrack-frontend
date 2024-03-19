import { Sidebar } from "@/components/dashboard/Sidebar";
import TransactionTabs from "@/components/dashboard/Transaction/TransactionTabs";
import TransactionTopbar from "@/components/dashboard/Transaction/TransactionTopbar";
import { useRouter } from "next/router";

export default function transactions() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
    }
  }
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="sticky">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full space-x-6">
          <TransactionTopbar />
          <TransactionTabs />
        </div>
      </div>
    </div>
  );
}
