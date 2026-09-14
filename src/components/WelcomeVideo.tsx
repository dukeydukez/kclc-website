type WelcomeVideoProps = {
  videoId: string;
  title?: string;
};

export default function WelcomeVideo({
  videoId,
  title = "Welcome to Kingsway Community Life Centre",
}: WelcomeVideoProps) {
  return (
    <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl bg-navy shadow-xl">
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
