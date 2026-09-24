import { useState, useEffect } from 'react';
import Slider, { type Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  topics: string[];
}

export default function GithubProjectsMobile() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/clarahedgehog/repos?sort=updated');

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data: Repository[] = await response.json();
        const originalRepos = data;

        setRepos(originalRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-taupe-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: true,
    dots: true,
  };

  const SafeSlider = (Slider as any).default || Slider;

  return (
    <div className="w-full lg:px-8 lg:py-30 bg-[#A3B1C7] lg:hidden px-7.5 py-10 pb-15">
      <h2 className="text-white text-3xl drop-shadow-[0_2.2px_0.9px_rgb(164,129,97)] mb-8 text-center font-alice">My Projects</h2>
      <div className="px-4 h-full">
        <SafeSlider {...settings}>
          {repos.map((repo) => {
            const imageUrl = repo.homepage
              ? `https://api.microlink.io/?url=${encodeURIComponent(repo.homepage)}&screenshot=true&meta=false&embed=screenshot.url`
              : `https://opengraph.githubassets.com/1/clarahedgehog/${repo.name}`;

            const targetUrl = repo.homepage || repo.html_url;

            return (
              <div key={repo.id} className="px-3 pb-8 w-full flex flex-col h-full content-center">
                <div className="flex flex-col bg-[#FBF6ED] border border-[#FBF6ED] rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-97 transition-transform">
                  <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden bg-[#FBF6ED] aspect-auto border-b border-[#FBF6ED]">
                    <img
                      src={imageUrl}
                      alt={`Preview of ${repo.name}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </a>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-semibold mb-2 font-alice">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-taupe-600"
                      >
                        {repo.name}
                      </a>
                    </h3>
                    <p className='text-sm text-taupe-600 font-medium my-4 grow'>{repo.description || 'No description provided.'}</p>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mb-4 text-sm font-medium text-taupe-600 hover:text-[#A3B1C7]"
                      >
                        Visit Live Site &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </SafeSlider>
      </div>
    </div>
  );
}