import Link from "next/link";
import Tx from "@/components/Tx";

export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="kicker" style={{ justifyContent: "center" }}>404</p>
      <h1>
        <Tx en="This page is not on the cause list." bn="এই পাতাটা কার্যতালিকায় নেই।" />
      </h1>
      <p className="bn-line">
        <Tx
          en="The page you are looking for has moved or never existed."
          bn="আপনি যে পাতাটা খুঁজছেন, সেটা সরে গেছে — বা কখনোই ছিল না।"
        />
      </p>
      <p>
        <Link className="btn gold" href="/">
          <Tx en="Back to the chamber" bn="চেম্বারে ফিরুন" />
        </Link>
      </p>
    </div>
  );
}
