const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div
        className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingSpinner;
