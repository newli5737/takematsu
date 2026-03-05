import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Recruitment } from './pages/Recruitment';
import { JobDetail } from './pages/JobDetail';
import { Access } from './pages/Access';
import { Contact } from './pages/Contact';

type Page =
  | 'home'
  | 'company'
  | 'services'
  | 'projects'
  | 'project-detail'
  | 'news'
  | 'news-detail'
  | 'recruitment'
  | 'job-detail'
  | 'access'
  | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedId, setSelectedId] = useState<number | undefined>();

  const handleNavigate = (page: string, id?: number) => {
    setCurrentPage(page as Page);
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Reset selectedId when navigating away from detail pages
    if (!['project-detail', 'news-detail', 'job-detail'].includes(currentPage)) {
      setSelectedId(undefined);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'company':
        return <Company onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects onNavigate={handleNavigate} />;
      case 'project-detail':
        return <ProjectDetail projectId={selectedId || 1} onNavigate={handleNavigate} />;
      case 'news':
        return <News onNavigate={handleNavigate} />;
      case 'news-detail':
        return <NewsDetail articleId={selectedId || 1} onNavigate={handleNavigate} />;
      case 'recruitment':
        return <Recruitment onNavigate={handleNavigate} />;
      case 'job-detail':
        return <JobDetail jobId={selectedId || 1} onNavigate={handleNavigate} />;
      case 'access':
        return <Access onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className={`flex-grow ${currentPage === 'news-detail' ? 'pt-20' : ''}`}>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
