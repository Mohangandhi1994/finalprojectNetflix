import React from "react";
import MovieList from "../movie/MovieList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RowData = () => {
  const data = [
    {
      title: "Avatar",
      poster:
        "https://i.pinimg.com/originals/87/e9/9e/87e99eb0661a04d5350105727ac3be23.jpg",
      desc: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora.",
    },
    {
      title: "Titanic",
      poster: "https://m.media-amazon.com/images/I/51mTtUGvUCL._AC_SY445_.jpg",
      desc: "The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio. The two play characters who are of different social classes. They fall in love after meeting aboard the ship, but it was not good for a rich girl to fall in love with a poor boy in 1912.",
    },
    {
      title: "Maaran",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMzlkZjljOTMtNTQzMC00MTU3LTlhNTktMTM3YjljOTk1ZjJmXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg",
      desc: "An investigative journalist is in trouble when he publishes an article that exposes bitter truths about a corrupt politician.",
    },
    {
      title: "Karnan",
      poster:
        "https://wikiimg.tojsiabtv.com/wikipedia/en/6/62/Karnan_2021_poster.jpg",
      desc: "Karnan ( pronunciation ( help info ) ) is a 2021 Indian Tamil - language action film directed by Mari Selvaraj and produced by Kalaipuli S. Thanu under its banner V Creations . The film stars Dhanush , Lal , Yogi Babu , Natarajan Subramaniam and Rajisha Vijayan (in her Tamil debut). The storyline is loosely influenced by the 1995 Kodiyankulam caste violence that occurred inthe Thoothukudi district .",
    },
    {
      title: "Vikram",
      poster:
        "https://igimages.gumlet.io/tamil/home/vikramhitlist-562022.jpg?w=700&dpr=1.5",
      desc: "The plot follows a black-ops squad led by Agent Vikram, in which he aims a drug syndicate group called Vetti Vagaiyara, led by Sandhanam, who wants the missing drugs to be delivered to his cold-blooded boss Rolex.",
    },
    {
      title: "Anjathe",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Anjathe.jpg",
      desc: "Anjathe, a tale of two friends Sathya & Kiruba played by Narain and Ajmal (debut), defies plot synopsis with its many twists and turns. The lives of these friends take turns they least expect - at times by destiny and at other times by desperation.",
    },
    {
      title: "Jai Bhim",
      poster:
        "https://fr.web.img6.acsta.net/pictures/21/11/07/18/39/2967840.jpg",
      desc: "The film deals with the subject of police bias and state violence against a marginalised community. Based on a true incident in 1993, which involves a case fought by Justice K. Chandru, it revolves around the lives of Sengeni and Rajakannu, a couple from the Irular tribe.",
    },
    {
      title: "Soorarai Pottru",
      poster:
        "https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suriya_soorarai_pottru_trailer_release.jpeg?itok=QBudRLp_",
      desc: "The film stars Suriya, Aparna Balamurali and Paresh Rawal while Mohan Babu, Urvashi and Karunas feature in supporting roles. The film was partly inspired by events from the life of Simplifly Deccan founder G. R. Gopinath as described in his memoir Simply Fly: A Deccan Odyssey.",
    },
    {
      title: "Don",
      poster:
        "https://static.toiimg.com/photo/91530880.cms?imgsize=15970",
      desc: "Suryah, Samuthirakani, Priyanka Arul Mohan and Soori appear in pivotal roles. It revolves around a reluctant engineering student repeatedly clashing with his college's discipline mentor, while still trying to discover his passion in life and prove his eligibility to his father.",
    },
    {
      title: "Doctor",
      poster:
        "https://www.pinkvilla.com/imageresize/doctor_movie_review_main.jpg?width=752&format=webp&t=pvorg",
      desc: " Varun, a military doctor working in the Indian Army Medical Corps is a strict and practical person. While returning home from an operation, he receives a voicemail from his fiancée, Padmini, who urges him to call off their upcoming wedding.",
    },
    {
      title: "Mersal",
      poster:
        "https://83810-371851-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/09/mersal_poster_work_by_manifrkz_by_manifrkz-dbjr7zh.jpg",
      desc: "The story revolves around two brothers; one is a magician avenging his parents's deaths and medical crimes, and the other, a reputed doctor who charges meagre amounts from his patients.",
    },
    {
      title: "Ponniyin Selvan",
      poster:
        "https://www.thehindu.com/entertainment/movies/wq3joo/article65183588.ece/alternates/FREE_435/ps1.jpeg",
      desc: "(Son of Ponni) is an upcoming Indian Tamil-language epic period film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan.",
    },
    {
      title: "Viswasam",
      poster:
        "https://i2.cinestaan.com/image-bank/1500-1500/141001-142000/141531.jpg",
      desc: "The film stars Ajith Kumar, Nayanthara, Jagapathi Babu and Anikha Surendran. The story revolves around Thookku Durai, a chieftain, gets separated from his wife, Niranjana, after their daughter, Swetha, gets injured during a fight. Years later, he tries to protect Swetha without revealing his identity.",
    },
    {
      title: "Bahubali",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
      desc: "A fearless man, who grows up in a sheltered tribal village, is driven by extraordinary forces in search of an elusive goal, that leads him on an adventure into completely unfamiliar territory. On this journey, he not only finds love, but uncovers a truth that steers him towards his true destiny.",
    },
    {
      title: "Sri Rama Rajyam",
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sri-rama-rajyam-et00008190-24-03-2017-19-55-53.jpg",
      desc: "The film is based on the epic Ramayana. The film was Bapu's final directional venture. The film depicts Rama's rule of Ayodhya after he returns home from Lanka, his separation from Sita and her reclusive life in the forest as she raises their children Lava and Kusa.",
    },
    {
      title: "Kaathu vaakula rendu kadhal",
      poster:
        "https://www.pinkvilla.com/imageresize/kaathu_vaakula_rendu_kaadhal_review_1.jpg?width=752&format=webp&t=pvorg",
      desc: "Kaathuvaakula Rendu Kaadhal ( transl. Two loves in a breeze) is an 2022 Indian Tamil-language romantic comedy film written and directed by Vignesh Shivan, produced by Seven Screen Studios in association with Shivan's Rowdy Pictures, and distributed by Udhayanidhi Stalin through Red Giant Movies.",
    },
    {
      title: "K.G.F",
      poster:
        "https://www.pinkvilla.com/imageresize/kgf_collage_0.jpg?width=752&format=webp&t=pvorg",
      desc: "The film focuses on Rocky, a high-ranking assassin in Mumbai, who was born in poverty. After being offered the total control of Mumbai by his employer's boss, he disguises himself as a slave-laborer in the Narachi limestone mine (Kolar Gold Fields), aiming to assassinate Garuda, the future heir of Kolar Gold Fields.",
    },
    {
      title: "Beast",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yMXzvcmeKg2l3p3zAlSaLmGCcBcebyuIprTi8yQVYB4-1ZojDH5zR8ecbwU0S_H_SxA&usqp=CAU",
      desc: "The story revolves around a widowed father (Elba) and his two teenage daughters (Halley, Sava Jeffries) who find themselves hunted by a massive rogue lion intent on proving that the Savanna has but one apex predator. Beast is scheduled to be released in the United States on August 19, 2022, by Universal Pictures.",
    },
    {
      title: "The Warrior",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/The_Warrior_%28Indian_Film%29.jpg",
      desc: "The Warriorr is a 2022 Indian action film directed by N. Lingusamy and produced by Srinivasa Silver Screen. It is shot simultaneously in Telugu and Tamil",
    },
    {
      title: "Maamanithan",
      poster:
        "https://pbs.twimg.com/media/Eydz-ajXIAkvz52.jpg",
      desc: "A humble auto driver is forced to go on the run, leaving his wife and two kids behind, after being cheated by a fraudster. Will he be able to save his family?",
    },
  ];
  return (
    <Container>
      <Row>
        <Col md={4}style={{color: "white" }}></Col>
        <h1>PLUTO'S MOVIES</h1>

      </Row>
      <Row>
        {data.map((flim) => (
          <Col md={3} key= {flim.title}>
            <MovieList flim= {flim}></MovieList>
            
          </Col>
        ))}
      </Row>

      <Row>
        <Col md={4}style={{ color: "white" }}></Col>
        <h1>TRENDING NOW</h1>
          

      </Row>
      <Row>
      {data.map((flim) => (
          <Col md={3} key= {flim.title}>
            <MovieList flim= {flim}></MovieList>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RowData;
