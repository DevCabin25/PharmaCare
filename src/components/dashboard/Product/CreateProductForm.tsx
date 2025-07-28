'use client';

import { useState } from 'react';

export default function CreateProductForm() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState({
    name: '',
    genericName: '',
    brand: '',
    description: '',
    dosageForm: '',
    strength: '',
    price: '',
    purchasePrice: '',
    stock: '',
    manufacturer: '',
    expiryDate: '',
    imageUrl: '',
    location: '',
    customLocation: '',
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = {
      ...product,
      location: product.location === 'custom' ? product.customLocation : product.location,
    };
    console.log('Submitting product:', finalData);
    // Call your API here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 border-t-2 border-green-300 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">🧪 Product Creation</h2>

      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input type="text" name="genericName" placeholder="Generic Name" value={product.genericName} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input type="text" name="dosageForm" placeholder="Dosage Form (e.g., tablet, syrup)" value={product.dosageForm} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input type="text" name="strength" placeholder="Strength (e.g., 500mg)" value={product.strength} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input type="number" name="price" placeholder="Selling Price" value={product.price} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input type="number" name="purchasePrice" placeholder="Purchase Price" value={product.purchasePrice} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} className="border px-3 py-2 rounded" />
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="manufacturer" placeholder="Manufacturer" value={product.manufacturer} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input type="date" name="expiryDate" value={product.expiryDate} onChange={handleChange} className="border px-3 py-2 rounded" />
          
          <select
            name="location"
            value={product.location}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          >
            <option value="">Select Location</option>

            <optgroup label="Shelves">
              {['A', 'B', 'C', 'D'].map(row =>
                Array.from({ length: 10 }, (_, i) => (
                  <option key={`Shelf ${row}${i + 1}`} value={`Shelf ${row}${i + 1}`}>
                    Shelf {row}{i + 1}
                  </option>
                ))
              )}
            </optgroup>

            <optgroup label="Fridge">
              <option value="Fridge 1">Fridge 1</option>
              <option value="Fridge 2">Fridge 2</option>
              <option value="Fridge Top">Fridge Top</option>
              <option value="Fridge Bottom">Fridge Bottom</option>
            </optgroup>

            <optgroup label="Drawers">
              <option value="Drawer 1">Drawer 1</option>
              <option value="Drawer 2">Drawer 2</option>
              <option value="Drawer 3">Drawer 3</option>
              <option value="Drawer A">Drawer A</option>
              <option value="Drawer B">Drawer B</option>
            </optgroup>

            <optgroup label="Other">
              <option value="Counter Shelf">Counter Shelf</option>
              <option value="Back Storage">Back Storage</option>
              <option value="Top Cabinet">Top Cabinet</option>
              <option value="Emergency Kit">Emergency Kit</option>
              <option value="custom">Other (Manual Entry)</option>
            </optgroup>
          </select>

          {product.location === 'custom' && (
            <input
              type="text"
              name="customLocation"
              placeholder="Enter custom location"
              value={product.customLocation}
              onChange={handleChange}
              className="border px-3 py-2 rounded"
            />
          )}

          <input type="file" name="imageUrl" onChange={(e) => {
            const file = e.target.files?.[0];
            setProduct((prev) => ({ ...prev, imageUrl: file?.name || '' }));
          }} className="border px-3 py-2 rounded" />

          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 border px-3 py-2 rounded"
            rows={4}
          />
        </div>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded">
            Back
          </button>
        )}
        {step < 2 ? (
          <button type="button" onClick={handleNext} className="bg-green-600 text-white px-10 py-2 rounded">
            Next
          </button>
        ) : (
          <button type="submit" className="bg-green-600 text-white px-10 py-2 rounded">
            Submit Product
          </button>
        )}
      </div>
    </form>
  );
}
