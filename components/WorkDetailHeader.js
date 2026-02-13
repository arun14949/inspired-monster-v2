import { useRouter } from "next/router";

const WorkDetailHeader = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/works");
  };

  return (
    <header className="work-detail-header" onClick={handleBack}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Back to Works</span>
    </header>
  );
};

export default WorkDetailHeader;
