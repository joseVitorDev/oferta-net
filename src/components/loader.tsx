export function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="relative w-20 h-20 flex justify-center items-center">
        <span className="absolute w-full h-full border-4 border-t-transparent border-l-red-600 border-b-transparent border-r-transparent rounded-full animate-spin"></span>
        <strong className="text-red-600 text-4xl">N</strong>
      </div>
    </div>
  );
}
