import { useEffect } from "react";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuAI" },
    { name: "description", content: "AI-the-way to Success!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect( () => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  return <main className ="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track You Applciation & Resume Rating</h1>
        <h2>Review your submission and check AI-powered feedback.</h2>
      </div>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
          <div key={resume.id}>
            <ResumeCard key={resume.id} resume={resume} />
          </div>
          ))}
        </div>
      )}
    </section>
    
    


  </main>
}
