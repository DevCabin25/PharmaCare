import React from 'react';
import { Button } from '../ui/button';
import { LogOut, Plus } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
<nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center">
              <Plus className="w-10 h-10 text-white" />
            </div>
           <div className='flex  flex-col'>
             <span className="text-xl font-semibold text-gray-900">PharmaCare</span>
            <span className='text-sm text-gray-500'>Pharmacy Owner (owner)</span>
           </div>
          </div>

          {/* Logout Button */}
          <Button
            variant="outline"
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 bg-transparent"
          >
            <span>Logout</span>
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>





            
        </div>
    );
};

export default Navbar;