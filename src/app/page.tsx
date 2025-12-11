import MenuSection from "@/components/MenuSection";
import CartSection from "@/components/CartSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          ORDER NOW
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Select your favorite combo and get instant discounts.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <MenuSection />
        </div>
        <div className="lg:col-span-1 sticky top-24"> 
           <CartSection />
        </div>
      </div>
    </div>
  );
}