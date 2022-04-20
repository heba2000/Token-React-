import './getManager.css'

function GetManager (){
    return(
        <section className='bg py-5'>
            <div class="container">    
            <div className='row'>
                <div className='col-12 py-2'> 
                <h4 className='text-center'> Title </h4>
                    <p class="typing">
                        This paragraph of text will be animated with a "typewriter" style effect, 
                        and it will continue to work even if it splits across multiple lines.  Well, in this case, 
                        up to a maximum of 5 lines, but you get the picture. IIIIIIIII it will continue to work even if it splits across multiple lines.  
                        lines lines lines lines lines lines lines lines .hiders p:nth-child(5) 
                        This paragraph of text will be animated with a "typewriter" style effect, 
                        and it will continue to work even if it splits across multiple lines.  Well, in this case, 
                        up to a maximum of 5 lines, but you get the picture. IIIIIIIII it will continue to work even if it splits across multiple lines.  
                        lines lines lines lines lines lines lines lines .hiders p:nth-child(5) 
                    </p>
                    <div class="hiders">
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div> 
        </div>
        </section>
    )
}

export default GetManager ;