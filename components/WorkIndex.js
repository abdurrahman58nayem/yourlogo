"use client";

import Link from "next/link";
import Tx from "./Tx";
import WorkGrid from "./WorkGrid";

export default function WorkIndex() {
  return (
    <section className="section">
      <div className="wrap-wide">
        <p className="kicker">
          <Tx en="Selected identities" bn="বাছাই করা আইডেন্টিটি" />
        </p>
        <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", maxWidth: "14ch", marginBottom: 16 }}>
          <Tx en="Twelve marks. One standard." bn="বারোটি মার্ক। একই মান।" />
        </h1>
        <p className="dek" style={{ marginBottom: 28 }}>
          <Tx
            en="Each identity started as a single idea and was built to survive a sign, a screen, and a stamp."
            bn="প্রতিটা আইডেন্টিটি একটা আইডিয়া থেকে শুরু, আর বানানো হয়েছে সাইন, স্ক্রিন, আর সিলে টিকতে।"
          />
        </p>
        <WorkGrid />
        <p style={{ marginTop: 28 }}>
          <Link className="btn" href="/start">
            <Tx en="Start a project" bn="প্রজেক্ট শুরু করুন" />
          </Link>
        </p>
      </div>
    </section>
  );
}
