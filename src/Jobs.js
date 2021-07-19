import Job from './Job';

const Jobs = (props) => {
return (

<div className="job-list">
    
<Job color="border-red" title="Full Time Sales Associate - Sydney Boutique" typeContrat="CDI" country="Australie" city="Sydney" />
<Job color="border-green" title="Agent de sécurité - Pantin" typeContrat="CDI" country="France" city="Pantin" />
<Job color="border-yellow" title="Responsable d'Atelier (H/F)" typeContrat="CDD" country="France" city="Paris" />
<Job color="border-blue" title="Chef de Projets" typeContrat="CDD" country="France" city="Paris" />
<Job color="border-pink" title="Développeur REACT.JS" typeContrat="CDI" country="France" city="Paris" />

<Job color="border-red" title="Sales Associate - Stockholm" typeContrat="CDI" country="Suède" city="Stockholm" />

<Job color="border-green" title="Vendeur/se - Crans Montana" typeContrat="CDI" country="Suisse" city="Crans Montana" />
<Job color="border-yellow" title="CRM & Data Quality Analyst" typeContrat="CDI" country="USA" city="New york" />
<Job color="border-blue" title="Infirmier (H/F)" typeContrat="CDI" country="France" city="Pantin" />


</div>


)
}


export default Jobs;