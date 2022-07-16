// import useRouter from "next/router";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link
        href={
          "solana:https%3A%2F%2Fpublic-api.candypay.fun%2Fapi%2Fv1%2Fmint%3Fid%3DTRZOAOVRr2bUsmCTbh2Bc?label=Credix+Test&message=Thanks+for+minting+NFTs%21 "
        }
      >
        helo send
      </Link>
    </div>
  );
}
