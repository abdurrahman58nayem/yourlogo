import Link from "next/link";
import Tx from "@/components/Tx";

export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="kicker">404</p>
      <h1>This page wandered off.</h1>
      <p className="bn-line">এই পাতাটা খুঁজে পাওয়া যায়নি।</p>
      <p>
        <Link className="btn" href="/">
          <Tx en="Back to the studio" bn="স্টুডিওতে ফিরুন" />
        </Link>
      </p>
    </div>
  );
}
