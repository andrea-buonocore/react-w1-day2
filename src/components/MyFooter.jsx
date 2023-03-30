

const MyFooter = function(){
    const d = new Date();
    let year = d.getFullYear();
    console.log(year);
    return (
        <footer className="fixed-bottom text-bg-dark text-center">
            <p className="my-3">&copy; Andrea Buonocore {year}</p>
        </footer>
    )
}

export default MyFooter;