import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <div className="pt-4 pl-8 text-5xl text-violet-600">
        Nord
      </div>
      <div>
        <ul className="pt-4 pr-8 text-violet-600 absolute h-14 w-14 top-0 start-0 relative h-32 w-32 right-3">
          <li>
            Docs
          </li>
          <li>
            About
          </li>
          <li>
            Sign in
          </li>
        </ul>
      </div>

    </main>
  );
}
