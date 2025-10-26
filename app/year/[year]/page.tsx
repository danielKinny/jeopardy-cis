import { getYear, YearData } from "../../../data/years";
import PasswordGate from "../../components/PasswordGate";
import BoardClient from "../BoardClient";

export default async function YearPage({ params }: { params: { year?: string } | Promise<{ year?: string }> }) {
  const resolved = await params;
  const yearNum = Number(resolved?.year ?? 0);
  const yearData = getYear(yearNum) as YearData | null;

  if (!yearData) {
    return (
      <div className="p-8">
        <p className="mb-4">Year not found.</p>
        <a href="/">Back</a>
      </div>
    );
  }

  return (
    <PasswordGate year={yearNum}>
      <BoardClient yearNum={yearNum} yearData={yearData} />
    </PasswordGate>
  );
}
