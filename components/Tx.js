/** Renders both languages. CSS shows one, from the moment the page paints. */
export default function Tx({ en, bn }) {
  return (
    <>
      <span className="len">{en}</span>
      <span className="lbn">{bn}</span>
    </>
  );
}
