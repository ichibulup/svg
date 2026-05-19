import { SvgComponent } from "@/components/svg";
import { Button } from "gorth-ui/custom/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="flex items-center justify-center p-8">
        <SvgComponent />
        <Button asChild>
          <Link href="/demo">Demo</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </main>
    </div>
  );
}
