"use client";
import { useState } from "react";
import { FaCheckSquare, FaRegSquare, FaEdit, FaTimes } from "react-icons/fa";

export default function TaskAndStats() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Sign contract for "What are conference organizers afraid of?"', completed: true },
    { id: 2, text: "Lines From Great Russian Literature? Or E-mails From My Boss?", completed: false },
    { id: 3, text: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit", completed: false },
    { id: 4, text: "Create 4 Invisible User Experiences you Never Knew About", completed: true },
  ]);

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      {/* Left Section: Tasks */}
      <div className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-1/2">
        <div className="flex items-center justify-between bg-gray-900 text-white p-3 rounded-t-lg">
          <span className="text-sm font-semibold">Tasks:</span>
          <div className="flex items-center gap-3">
            <span className="bg-gray-700 px-3 py-1 text-xs rounded">BUGS</span>
            <span className="text-gray-400">● WEBSITE</span>
            <span className="text-gray-400">● SERVER</span>
          </div>
        </div>

        {/* Task List */}
        <ul className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between py-3 px-2">
              <button className="text-purple-600">
                {task.completed ? <FaCheckSquare size={18} /> : <FaRegSquare size={18} />}
              </button>
              <span className="flex-1 ml-2 text-gray-700 text-sm">{task.text}</span>
              <div className="flex space-x-2">
                <button className="text-purple-600">
                  <FaEdit size={16} />
                </button>
                <button className="text-red-500">
                  <FaTimes size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Employee Stats */}
      <div className="bg-white shadow-lg rounded-lg p-4 w-full lg:w-1/2">
        <div className="bg-orange-500 text-white p-3 rounded-t-lg">
          <h3 className="text-sm font-semibold">Employees Stats</h3>
          <p className="text-xs">New employees on 15th September, 2016</p>
        </div>

        {/* Employee Table */}
        <table className="w-full text-left mt-2">
          <thead>
            <tr className="text-gray-600 text-xs border-b">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Salary</th>
              <th className="py-2">Country</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr className="border-b">
              <td className="py-2">1</td>
              <td className="py-2">Dakota Rice</td>
              <td className="py-2">$36,738</td>
              <td className="py-2">Niger</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">2</td>
              <td className="py-2">Minerva Hooper</td>
              <td className="py-2">$23,789</td>
              <td className="py-2">Curaçao</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">3</td>
              <td className="py-2">Sage Rodriguez</td>
              <td className="py-2">$56,142</td>
              <td className="py-2">Netherlands</td>
            </tr>
            <tr>
              <td className="py-2">4</td>
              <td className="py-2">Philip Chaney</td>
              <td className="py-2">$38,735</td>
              <td className="py-2">Korea, South</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
