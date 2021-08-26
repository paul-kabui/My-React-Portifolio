function HorizontalNav(){
    var navStyle = {
        logo: {
            color: "#db3d44",
            'text-shadow': '3px 3px 3px #ababab',
            'font-family': "'Sofia', cursive"
        },
        h4: {
            color: '#db3d44',
            'text-shadow': '3px 3px 3px #ababab'
        }
    }
    return(
        <div className="container-md">
            <div className="row shadow">
                <div className="col-md-3">
                    <h2 style={navStyle.logo}><i>Pkabui</i></h2>
                </div>
                <div className="col-md-5"></div>
                <div className="col-md-4 bg">
                    <h4 style={navStyle.h4} className="fw-bold">Portfolio</h4>
                </div>
            </div>  
        </div>
    )
}

export default HorizontalNav