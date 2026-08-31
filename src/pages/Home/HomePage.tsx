import GithubProjects from "../../components/GithubProjets"
import GithubProjectsMobile from "../../components/GithubProjetsMobile"
import GuineaPigs from "../../components/GuineaPigs"
import HomeContent from "../../components/HomeContent"
import Information from "../../components/Information"

const HomePage = () => {
  return (
    <>
      <Information />
      <GithubProjects />
      <GithubProjectsMobile />
      <HomeContent />
      <GuineaPigs />
    </>
  )
}

export default HomePage