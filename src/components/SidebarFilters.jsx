import React from "react";

export default function SidebarFilters({ categories, active, onChange, subCategories, activeSub, onSubChange, priceRange, onPriceChange }) {
  return (
    <aside className="hidden lg:block w-64">
      <div className="sticky top-[88px] space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Categories</h4>
          <div className="space-y-2">
            <button onClick={() => onChange(null)} className={`block text-left w-full px-3 py-2 rounded-md ${active === null ? "bg-indigo-50 text-indigo-600" : "text-white hover:bg-white/10"}`}>All</button>
            {categories.map((c) => (
              <div key={c}>
                <button
                  onClick={() => onChange(c)}
                  className={`block text-left w-full px-3 py-2 rounded-md ${active === c ? "bg-indigo-50 text-indigo-600 font-medium" : "text-white hover:bg-white/10"}`}
                >
                  {c}
                </button>
                {active === c && subCategories && subCategories.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-indigo-500/30 pl-2">
                    {subCategories.map(sub => (
                      <button
                        key={sub}
                        onClick={() => onSubChange(sub)}
                        className={`block text-left w-full px-3 py-1.5 text-sm rounded-md ${activeSub === sub ? "text-indigo-400 font-medium" : "text-gray-400 hover:text-white"}`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Price</h4>
          <div className="flex gap-2">
            <input type="number" value={priceRange.min} onChange={(e) => onPriceChange({ ...priceRange, min: Number(e.target.value) })} className="w-24 border rounded-md px-2 py-1 bg-transparent text-white border-white/50" />
            <input type="number" value={priceRange.max} onChange={(e) => onPriceChange({ ...priceRange, max: Number(e.target.value) })} className="w-24 border rounded-md px-2 py-1 bg-transparent text-white border-white/50" />
          </div>
        </div>
      </div>
    </aside>
  );
}
