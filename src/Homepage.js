//import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./component/Header";

function HomePage() {
  return (
    <>
    <Header />
    {/* <div className="bg">
      <div className="main">Start your yoga journey here</div>
    </div> */}


      <Container>
        <div class="row">
          <div class="col-8">
          <div class="container"> 
                  <div className="heading"> 
                    <h4>Our Mision</h4>
                  </div>
                  <p> 
                  Meditators often describe rewarding experiences after only 
                  a few weeks of daily meditation. Those who find meditation 
                  to be a strenuous undertaking simply need to shift their 
                  expectations. Once we appreciate the wide-ranging holistic 
                  benefits of meditation, we begin to truly appreciate the practice. 
                  </p>
                </div>
          </div>
    <div class="col-4">
        <img alt="HomeImg" src="https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
  </div>



  <div class="row">
          <div class="col-4">

          <img alt="HomeImg" src="https://images.pexels.com/photos/3822364/pexels-photo-3822364.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        
          </div>

    <div class="col-8">
      <div class="container"> 
        <div className="heading"> 
          <h4>Benefit of Yoga</h4>
        </div>
                  <p> 
                  Because there are so many different kinds of yoga practices, it is possible 
                  for anyone to start. “Whether you’re a couch potato or a professional 
                  athlete, size and fitness levels do not matter because there are 
                  modifications for every yoga pose and beginner classes in every style,” 
                  says Dr. Nevins. “The idea is to explore your limits, not strive for some 
                  pretzel-like perfection. It is a great way to get in tune with your body 
                  and your inner self.”​
                  </p>
                </div>
        
    </div>
  </div>

      </Container>

      <Container> 

        <Row> 
          
          <div class="heading"> 
            <h1>YOGA THERAPY FEEDBACKS</h1>
          </div>
          
          </Row> 
          
        <Row> 
          
          <Col>

          <div class="row">
             <div class="col-sm">
               <div class="container"> 
                  <div className="heading"> 
                    <h4>Vinay</h4>
                  </div>
                  <p> 
                  " The main reason I wanted to 
                  join yoga was because I am 
                  voracious eater who could not 
                  control her diet (which mainly 
                  consisted of junk food!) After 
                  my three weeks course here 
                  I not only became a little... "
                  </p>
                </div>
              </div>

                <div class="col-sm"> 
                  <div class="container"> 
                    <div className="heading"> 
                        <h4>Sabrina</h4> 
                    </div>
                    <p> 
                    " I am very happy that I joined 
                    the class. Eventhough I had 
                    limited time, I learnt some of 
                    the exercises. I wish I had more 
                    time to complete the three months classes. 
                    I would strongly recommend others... "
                    </p>
                </div></div>

                <div class="col-sm">
                   <div class="container">
                     <div class="heading"> 
                     <h4>Joe</h4> 
                     </div> 
                     
                     <p> " I have learned a great deal 
                      over the last 7 days and become 
                      more flexible day by day. I have 
                      no doubt I shall continue practicing 
                      yoga will into the future. Thanks to all 
                      of you who have helped me. " 
                      </p> 
                      
                      </div>
                      
                    </div> 
                </div> 
          </Col> 
        </Row>
            
        </Container > 

        </>
  );
}

export default HomePage;