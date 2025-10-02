function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
      <h2 className="text-center text-xl font-semibold">Loading...</h2>
      <p className="w-1/3 text-center text-sm text-gray-600">
        This may take a few seconds, please do not close this page.
      </p>
    </div>
  );
}

export default Loading;
