import notFound from "../assets/img/404.jpg"

const NotFoundPage = () => {
  return (
    <div style ={{
        display:"flex",
        flexDirection: "column",
        maxWidth: "800px",
        margin: "0 auto"
    }}>
      <h3 style={{
        textAlign:"center",
        fontSize: "32px"
        }}>404 page not found</h3>
        <img src={notFound} alt="Page not fount"/>
    </div>
  );
}

export default NotFoundPage
