export interface User {
   id: number;
   name: string;
   role: string;
   isOnline: boolean;
   bio: string;
   skills: string[];
 }
 
 export const users: User[] = [
   {
     id: 1,
     name: "Alice Johnson",
     role: "Frontend Developer",
     isOnline: true,
     bio: "Passionate about building beautiful UIs with React and TypeScript.",
     skills: ["React", "TypeScript", "Tailwind"]
   },
   {
     id: 2,
     name: "Bob Smith",
     role: "Backend Engineer",
     isOnline: false,
     bio: "Love working with Node.js and databases.",
     skills: ["Node.js", "PostgreSQL", "Docker"]
   },
   {
     id: 3,
     name: "Carol Williams",
     role: "UI/UX Designer",
     isOnline: true,
     bio: "Creating delightful user experiences.",
     skills: ["Figma", "Framer", "Design Systems"]
   }
 ];