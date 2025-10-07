import React, { useState } from "react";

const initialStudents = [
  { id: 1, name: "Alice", present: false },
  { id: 2, name: "Bob", present: false },
  { id: 3, name: "Charlie", present: false },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance System</h1>
      <ul>
        {students.map((student) => (
          <li
            key={student.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{student.name}</span>
            <button
              onClick={() => toggleAttendance(student.id)}
              className={`px-4 py-1 rounded ${
                student.present ? "bg-green-500" : "bg-red-500"
              } text-white`}
            >
              {student.present ? "Present" : "Absent"}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p>✅ Present: {presentCount}</p>
        <p>❌ Absent: {absentCount}</p>
      </div>
    </div>
  );
}
