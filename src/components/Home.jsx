import React from 'react'

export default function Home({img}) {
  return (
    <div>

      <h1 className="text-center lead display-5 py-4">Chimamanda Ngozie Adichie</h1>

      <div className='container-fluid py-3'>
    <div className="d-flex justify-content-start">
    <img src={img} alt='Chimamanda profile ' className='px-4 rounded '/>
        <p className='text-center lead py-5'>
        Chimamanda Ngozie Adichie born 15 September 1977 is a Nigerian writer whose works include novels, short stories and 
        nonfiction. She was described in The Times Literary Supplement as "the most prominent"
         of a "procession of critically acclaimed young anglophone authors  is succeeding in 
         attracting a new generation of readers to African literature", particularly in her second 
         home, the United States. Adichie has written the novels Purple Hibiscus (2003), 
         Half of a Yellow Sun (2006), and Americanah (2013), the short story collection The 
         Thing Around Your Neck (2009), and the book-length essay We Should All Be Feminists (2014)
         . Her most recent books are Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions
          (2017), Zikora (2020) and Notes on Grief (2021).
          Adichie completed her secondary education at the University of Nigeria Secondary School, 
          Nsukka, where she received several academic prizes. She studied medicine and pharmacy
           at the University of Nigeria for a year and a half. During this period, she edited The 
           Compass, a magazine run by the university's Catholic medical students
           onoris causa, by Johns Hopkins University. In 2017, she was conferred honorary
            degrees, Doctor of Humane letters, honoris causa, by Haverford College and The
             University of Edinburgh. 
        </p>
        
      </div>
      </div>
       
    </div>
  )
}
