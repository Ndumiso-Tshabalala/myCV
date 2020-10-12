<template>
 <div id="app">
  <!-- Contact section -->    
   <section class="contact" id="contact">
               

        <div class="max-width">
            
            <h2 class="title">Contact me</h2>
                        
            <div class="contact-content">
                <div class="column left">
                   
                    <div class="text">Get in Touch</div>
       
                    Hiring? need a project hand. Do not hesitate to get in touch. I am relatively active 24/7.
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">50 Steve Biko, Potchefstroom</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">tshabalalandumiso3@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="MAILTO:tshabalalandumiso3@gmail.com" method = "POST" enctype="text/plain">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" name = "name" placeholder="Name" required>
                            </div>

                            <div class="field email">
                                <input type="email" name = "email" placeholder="Email" required>
                            </div>
                        </div>

                        <div class="field">
                            <input type="text" name = "subject" placeholder="Subject" required>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message..." required></textarea>
                        </div>
                        <div class="button">
                            <button type="submit">Send message</button> 
                            <!-- socials -->
                            <div class = "social">
                            <a href="https://www.facebook.com/ndumiso.tshabalala.545"><i class="fab fa-facebook"></i> </a>
                             <a href="https://www.twitter.com/ndumiso_yg"><i class="fab fa-twitter"></i> </a>
        <a href="https://www.instagram.com/ndumiso_tshabalala"> <i class="fab fa-instagram"></i> </a>
        <a href="https://www.linkedin.com/in/ndumiso-tshabalala-bb86631b4/"><i class="fab fa-linkedin-in"></i> </a>
    </div> 
                        </div>
                        
                    </form>
                      
                </div>
            </div>
        </div>
    </section>
                           

    
 </div>
</template>



<script>
export default {
    name: "Contact"

}
</script>



<style scooped>

</style>