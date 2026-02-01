import React, { memo } from "react";
import { useSelector } from "react-redux";

function RightSideContent() {
  const { themeColors } = useSelector((state) => state.themeReducer);
    const approachCards = [
      {
        icon: "🧠",
        title: "Analytical Problem Solving",
        description:
          "I enjoy breaking down complex web development challenges into efficient, scalable solutions using the MERN stack and modern frontend technologies.",
      },
      {
        icon: "🔄",
        title: "Continuous Learning",
        description:
          "I stay updated with the latest web technologies like React, Next.js, Tailwind, and Node.js to deliver high-quality, modern applications.",
      },
      {
        icon: "🤝",
        title: "Team Collaboration",
        description:
          "I thrive in team environments, managing projects with Git, Postman, and Agile methodologies for smooth development workflows.",
      },
      {
        icon: "⚡",
        title: "Performance & Quality",
        description:
          "I focus on creating responsive, high-performance applications with clean, maintainable code and user-friendly interfaces.",
      }
    ];

  const Highlight = ({ children }) => (
    <span style={{ color: themeColors.primaryColor }}>{children}</span>
  );

  return (
    <div className="lg:w-1/2">
      <div className="sticky top-24">
        <div className="mb-10">
        {/* heading */}
        <h3
          className="text-3xl font-semibold mb-6"
          style={{ color: themeColors.primaryColor }}
        >
          My Development Philosophy
        </h3>

        {/* summary  */}
        <div
          className="p-6 rounded-xl"
          style={{
            backgroundColor: `${themeColors.primaryColor}08`,
            border: `1px solid ${themeColors.border}`,
          }}
        >
          <p
            className="text-lg leading-relaxed"
            style={{ color: themeColors.summeryText }}
          >
            <li>
              <Highlight>React, Next.js, Angular</Highlight>: Crafting responsive, scalable front-end applications. I turn complex UI designs into smooth, user-friendly experiences.
            </li>

            <li>
              <Highlight>MERN Stack, Node.js, Express, MongoDB</Highlight>: Building robust backend architectures and RESTful APIs, ensuring secure and efficient data handling.
            </li>

            <li>
              <Highlight>JWT, Firebase Auth</Highlight>: Implementing authentication and security mechanisms for modern web apps.
            </li>

            <li>
              <Highlight>Tailwind CSS, Bootstrap</Highlight>: Creating clean, accessible, and visually appealing interfaces with responsive layouts.
            </li>

            <li>
              <Highlight>Git, GitHub, Postman, Swagger</Highlight>: Managing projects, version control, and API testing with professional standards.
            </li>

            <li>
              <Highlight>Problem-solving, SDLC, Agile methodologies</Highlight>: Delivering production-ready, maintainable code and collaborating effectively in team environments.
            </li>
          </p>
        </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-lg flex flex-col"
              style={{
                backgroundColor: themeColors.bg,
                border: `1px solid ${themeColors.border}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                }}
              >
                {card.icon}
              </div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: themeColors.primaryColor }}
              >
                {card.title}
              </h4>
              <p className="text-sm" style={{ color: themeColors.summeryText }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h4
            className="text-lg font-semibold mb-4"
            style={{ color: themeColors.primaryColor }}
          >
            Upcoming Learning Goals
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Frontend Specialization", "Modern Web Development"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: `${themeColors.primaryColor}15`,
                    color: themeColors.primaryColor,
                    border: `1px solid ${themeColors.primaryColor}30`,
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RightSideContent);
