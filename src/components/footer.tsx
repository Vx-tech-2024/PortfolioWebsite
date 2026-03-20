export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <p className="flex items-center justify-center text-gray-400 mb-2">
                    Made by Joel George
                </p>
                <p className="text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} Joel George. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
}