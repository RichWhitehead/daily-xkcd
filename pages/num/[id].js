export async function ComicDetail(props){

  return(
    <>
      <h1>{props.comic.title}</h1>
      <img>src={props.comic.img} alt={props.comic.alt}</img>  
    </>  
  )
}
export async function getServerSideProps(context){
const num = content.query.id;
const response = await fetch(' https://xkcd-smoky.vercel.app/');
  const comic = await response.json();
  return{
    props: {
      comic
    }
  }
}
