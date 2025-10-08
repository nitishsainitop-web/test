import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import FortunaLogo from "../assets/FortunaLogo.jpg"; // 🟢 Update the path to your logo image

const Header2: React.FC = () => {
  const menuItems = [
    {
      title: "Business Advisory",
      options: ["Business Strategy", "Growth Planning", "Risk Management"],
    },
    {
      title: "Tax & Accounting",
      options: ["Tax Returns", "BAS & GST", "Payroll Services"],
    },
    {
      title: "Legal Advice",
      options: ["Contracts", "Employment Law", "Property Law"],
    },
    {
      title: "CFO & Bookkeeping",
      options: ["Virtual CFO", "Financial Reports", "Budgeting"],
    },
    {
      title: "Financial Planning",
      options: ["Investments", "Superannuation", "Retirement Planning"],
    },
    {
      title: "Business Insurance Broking",
      options: ["Commercial", "Personal", "Claims Support"],
    },
    {
      title: "Fortuna Tech",
      options: ["Cloud Solutions", "IT Consulting", "Automation"],
    },
  ];

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-12 py-4">
        {/* 🟩 Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={FortunaLogo}
            alt="Fortuna Advisory Group Logo"
            className="h-14 w-auto object-contain"
          />

        </Link>

        {/* 🟩 Menu Section */}
        <div className="flex space-x-8">
          {menuItems.map((item) => (
            <div className="relative group" key={item.title}>
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors">
                {item.title}
                <ChevronDown className="w-4 h-4 mt-0.5" />
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-8 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg min-w-[220px] z-10">
                <ul className="py-2">
                  {item.options.map((opt) => (
                    <li key={opt}>
                      <Link
                        to=""
                        className="block px-4 py-2 hover:bg-green-50 hover:text-green-700 text-gray-700 text-sm transition"
                      >
                        {opt}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header2;
