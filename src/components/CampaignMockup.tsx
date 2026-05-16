import img1 from "@/assets/Screenshot 2026-05-16 053436.webp";
import img2 from "@/assets/Screenshot 2026-05-16 053500.webp";

export function CampaignMockup() {
  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-[24px] border border-border bg-secondary shadow-xl">
        <img src={img1} alt="Campaign Discover View 1" className="w-full object-cover" />
      </div>
      <div className="overflow-hidden rounded-[24px] border border-border bg-secondary shadow-xl">
        <img src={img2} alt="Campaign Discover View 2" className="w-full object-cover" />
      </div>
    </div>
  );
}
