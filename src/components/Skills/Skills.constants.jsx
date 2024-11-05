import reactIcon from "../../assets/images/skills/react.png";
import nodeIcon from "../../assets/images/skills/nodejs.png";
import htmlIcon from "../../assets/images/skills/html.png";
import cssIcon from "../../assets/images/skills/css.png";
import dotnetIcon from "../../assets/images/skills/dotnet.png";
import sqlIcon from "../../assets/images/skills/db.png";
import tsIcon from "../../assets/images/skills/typescript.png";
import csharpIcon from "../../assets/images/skills/csharp.png";
import djangoIcon from "../../assets/images/skills/django.png";

import azureIcon from "../../assets/images/skills/azure.png";
import sparkIcon from "../../assets/images/skills/spark.png";
import pythonIcon from "../../assets/images/skills/python.png";

export const skillCat = {
  web: {
    categoryName: "Web Dev",
    percentage: 40,
    skillList: [
      { name: "HTML", xp: "11 YRS", icon: htmlIcon },
      { name: "CSS", xp: "11 YRS", icon: cssIcon },
      { name: "TypeScript", xp: "8 YRS", icon: tsIcon },
      { name: "React.js", xp: "8 YRS", icon: reactIcon },
      { name: "ASP.NET", xp: "8 YRS", icon: dotnetIcon },
      { name: "Node.js", xp: "8 YRS", icon: nodeIcon },
      { name: "Django", xp: "8 YRS", icon: djangoIcon },
      { name: "SQL / NoSQL", xp: "8 YRS", icon: sqlIcon },
    ],
  },
  app: {
    categoryName: "C# / .NET",
    percentage: 40,
    skillList: [
      { name: "C#", xp: "11 YRS", icon: csharpIcon },
      { name: ".NET", xp: "8 YRS", icon: dotnetIcon },
      { name: "Blazor", xp: "8 YRS", icon: dotnetIcon },
    ],
  },
  data: {
    categoryName: "Cloud & Data",
    percentage: 20,
    skillList: [
      { name: "Python", xp: "11 YRS", icon: pythonIcon },
      { name: "Azure / AWS / GCP", xp: "8 YRS", icon: azureIcon },
      { name: "Spark / Databricks", xp: "5 YRS", icon: sparkIcon },
    ],
  },
  soft: {
    categoryName: ["Creative", "Collabrative", "Patient", "Enthusiastic", "Innovative"],
    percentage: 100,
  },
};
