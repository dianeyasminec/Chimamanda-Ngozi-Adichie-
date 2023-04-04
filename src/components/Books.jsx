import React from 'react';
import Cards from './Cards';

export default function Books(props) {

const { details, img } = props;

console.log(details);

return (
  <>
<div className='container-fluid'>
<div className='row py-4'>
<div className='col-md-6 col-lg-4'>
<img src={img} alt='Chimamanda profile ' className='img-fluid rounded' />
</div>
<div className='col-md-6 col-lg-8'>
<h1 className='text-center text-md-start lead display-5 py-2 py-md-4'>Chimamanda Ngozi Adichie</h1>
<p className='lead py-3'>
Chimamanda Ngozie Adichie born 15 September 1977 is a Nigerian writer whose works include novels, short stories and nonfiction. She was described in The Times Literary Supplement as "the most prominent" of a "procession of critically acclaimed young anglophone authors is succeeding in attracting a new generation of readers to African literature", particularly in her second home, the United States. Adichie has written the novels Purple Hibiscus (2003), Half of a Yellow Sun (2006), and Americanah (2013), the short story collection The Thing Around Your Neck (2009), and the book-length essay We Should All Be Feminists (2014). Her most recent books are Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions (2017), Zikora (2020) and Notes on Grief (2021).
Adichie completed her secondary education at the University of Nigeria Secondary School, Nsukka, where she received several academic prizes. She studied medicine and pharmacy at the University of Nigeria for a year and a half. During this period, she edited The Compass, a magazine run by the university's Catholic medical students
onoris causa, by Johns Hopkins University. In 2017, she was conferred honorary degrees, Doctor of Humane letters, honoris causa, by Haverford College and The University of Edinburgh.
</p>
<blockquote className="blockquote mb-0 text-end py-4 lead">
<p>
{' '}
The single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete. They make one story become the only story .
{' '}
</p>
<footer className="blockquote-footer justify text-contend-end">
Chimamanda Ngozi Adichie
</footer>
</blockquote>
</div>
</div>



</div>
      <h1 className='text-center lead display-4 text-decoration-underline py-5'>Popular Books</h1>

      <div className='container-fluid '>
      <div className='container '>
            <div className='row '>
              {details.map((detail,index)=>{
                return(
                  <Cards title={detail.title} description={detail.description}  link={detail.link}/>
                )
              })}
              </div>
              </div>

        </div>

    
    </>
  )
}
