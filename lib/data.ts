export type Lang = "en" | "es";

export const WA = "5492995798163";
export const waLink = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export const tones: Record<string, string> = {
  ocean:
    "radial-gradient(120% 90% at 78% 8%, rgba(255,222,170,.5) 0%, rgba(255,222,170,0) 42%), linear-gradient(168deg, #2b6f86 0%, #12547a 40%, #0a3550 100%)",
  teal:
    "radial-gradient(110% 80% at 30% 12%, rgba(210,255,244,.55) 0%, rgba(210,255,244,0) 46%), linear-gradient(165deg, #2fb0a6 0%, #147e79 46%, #0c4f52 100%)",
  deep:
    "radial-gradient(90% 70% at 50% 118%, rgba(64,196,210,.42) 0%, rgba(64,196,210,0) 55%), linear-gradient(170deg, #0c2c46 0%, #0a2036 55%, #06101f 100%)",
  coral:
    "radial-gradient(120% 95% at 72% 4%, rgba(255,206,140,.7) 0%, rgba(255,150,90,0) 46%), linear-gradient(165deg, #e07a45 0%, #c2532f 48%, #7f2f22 100%)",
  moss:
    "radial-gradient(110% 85% at 26% 10%, rgba(224,255,196,.42) 0%, rgba(224,255,196,0) 48%), linear-gradient(165deg, #2f7f5c 0%, #1a6350 48%, #0c3d3a 100%)",
  dusk:
    "radial-gradient(130% 100% at 68% 2%, rgba(255,196,120,.78) 0%, rgba(255,150,90,0) 50%), linear-gradient(168deg, #e79a52 0%, #a85f43 46%, #2c3f57 100%)",
  sand:
    "radial-gradient(120% 90% at 74% 8%, rgba(255,236,200,.7) 0%, rgba(255,236,200,0) 46%), linear-gradient(165deg, #c6a066 0%, #9c7c4c 48%, #5f4a34 100%)",
};
