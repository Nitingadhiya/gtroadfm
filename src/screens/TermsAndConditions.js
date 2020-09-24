import React, {Component} from "react";
import {Text, View , StyleSheet ,Image,  ScrollView , Dimensions , ImageBackground } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const image = require('../../assets/Mask.png');
const logoImage2 = require('../../assets/Group-250.png');
const image2 = require('../../assets/Group-259.png');

class TermsAndConditions extends Component{
  render() {
    // beolow is the code for terms and conditions 
       return( 
         
      <ImageBackground source={image} style={styles.image}>
      
      <ImageBackground source={image2} style={styles.image2} >
      <Image source={logoImage2} style={styles.image3} />
          <View style={styles.container} >
          
          <ScrollView style={styles.scrollViewStyle}>   
              <View style={styles.containerx} >
                      <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Terms and conditions</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>These terms and conditions ("Terms", "Agreement") are an agreement between GT Road FM ("GT Road FM", "us", "we" or "our") and you ("User", "you" or "your"). This Agreement sets forth the general terms and conditions of your use of the GT Road.FM mobile application and any of its products or services (collectively, "Mobile Application" or "Services").</Text>
                          
                      </View>
                      <View style={styles.container2} >
                          <Text style={styles.HeadingText} > Age requirement</Text>
                      </View>
                      <View style={styles.container3} > 
                          {/* <Text style={styles.SubHeadingText/Bold}>Service</Text> */}
                          <Text style={styles.SubHeadingText}>You must be at least 13 years of age to use this Mobile Application. By using this Mobile Application and by agreeing to this Agreement you warrant and represent that you are at least 13 years of age.</Text>
                         
                      </View>
                      <View style={styles.container2} >
                          <Text style={styles.HeadingText} > Billing and payments</Text>

                      </View>
                      <View style={styles.container3} >
                            <Text style={styles.SubHeadingText}>You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. Where Services are offered on a free trial basis, payment may be required after the free trial period ends, and not when you enter your billing details (which may be required prior to the commencement of the free trial period). If auto-renewal is enabled for the Services you have subscribed for, you will be charged automatically in accordance with the term you selected. If, in our judgment, your purchase constitutes a high-risk transaction, we will require you to provide us with a copy of your valid government-issued photo identification, and possibly a copy of a recent bank statement for the credit or debit card used for the purchase. We reserve the right to change products and product pricing at any time.</Text>
                      </View>


                      <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Accuracy of information</Text>
                      </View>
                      <View style={styles.container3} > 
                          
                          <Text style={styles.SubHeadingText}>Occasionally there may be information in the Mobile Application that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, availability, promotions and offers. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Mobile Application or on any related Service is inaccurate at any time without prior notice (including after you have submitted your order). We undertake no obligation to update, amend or clarify information in the Mobile Application including, without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Mobile Application should be taken to indicate that all information in the Mobile Application or on any related Service has been modified or updated.</Text>
                         
                      </View>


                      <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Links to other mobile applications</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>Although this Mobile Application may link to other mobile applications, we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked mobile application, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their mobile applications. We do not assume any responsibility or liability for the actions, products, services, and content of any other third-parties. You should carefully review the legal statements and other conditions of use of any mobile application which you access through a link from this Mobile Application. Your linking to any other off-site mobile applications is at your own risk.</Text>
                      </View>


                   
                      <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Prohibited uses</Text>
                      </View>
                      <View style={styles.container3} >   
                       <Text style={styles.SubHeadingText}>In addition to other terms as set forth in the Agreement, you are prohibited from using the Mobile Application or its Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related mobile application, other mobile applications, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related mobile application, other mobile applications, or the Internet. We reserve the right to terminate your use of the Service or any related mobile application for violating any of the prohibited uses.</Text>
                      </View>

                     

                      <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Intellectual property rights</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>This Agreement does not transfer to you any intellectual property owned by GT Road FM or third-parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with GT Road FM. All trademarks, service marks, graphics and logos used in connection with our Mobile Application or Services, are trademarks or registered trademarks of GT Road FM or GT Road FM licensors. Other trademarks, service marks, graphics and logos used in connection with our Mobile Application or Services may be the trademarks of other third-parties. Your use of our Mobile Application and Services grants you no right or license to reproduce or otherwise use any GT Road FM or third-party trademarks.</Text>
                      </View>


                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Disclaimer of warranty</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>You agree that your use of our Mobile Application or Services is solely at your own risk. You agree that such Service is provided on an "as is" and "as available" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement. We make no warranty that the Services will meet your requirements, or that the Service will be uninterrupted, timely, secure, or error-free; nor do we make any warranty as to the results that may be obtained from the use of the Service or as to the accuracy or reliability of any information obtained through the Service or that defects in the Service will be corrected. You understand and agree that any material and/or data downloaded or otherwise obtained through the use of Service is done at your own discretion and risk and that you will be solely responsible for any damage to your computer system or loss of data that results from the download of such material and/or data. We make no warranty regarding any goods or services purchased or obtained through the Service or any transactions entered into through the Service. No advice or information, whether oral or written, obtained by you from us or through the Service shall create any warranty not expressly made herein.</Text>
                         </View>
                          
                        

                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Limitation of liability</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>To the fullest extent permitted by applicable law, in no event will GT Road FM, its affiliates, officers, directors, employees, agents, suppliers or licensors be liable to any person for (a): any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if GT Road FM has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of GT Road FM and its affiliates, officers, employees, agents, suppliers and licensors, relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to GT Road FM for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.</Text>
                          
                        </View>

                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Indemnification</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>You agree to indemnify and hold GT Road FM and its affiliates, directors, officers, employees, and agents harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Mobile Application or Services or any willful misconduct on your part.</Text>
                          
                        </View>

                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Severability</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</Text>
                          
                        </View>


                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Dispute resolution</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Ontario, Canada without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of Canada. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in Ontario, Canada, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.</Text>
                          
                        </View>

                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Assignment</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>You may not assign, resell, sub-license or otherwise transfer or delegate any of your rights or obligations hereunder, in whole or in part, without our prior written consent, which consent shall be at our own sole discretion and without obligation; any such assignment or transfer shall be null and void. We are free to assign any of its rights or obligations hereunder, in whole or in part, to any third-party as part of the sale of all or substantially all of its assets or stock or as part of a merger.</Text>

                        </View>

                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Changes and amendments</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>We reserve the right to modify this Agreement or its policies relating to the Mobile Application or Services at any time, effective upon posting of an updated version of this Agreement in the Mobile Application. When we do, we will revise the updated date at the bottom of this page. Continued use of the Mobile Application after any such changes shall constitute your consent to such changes.</Text>
 
                        </View>

                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Acceptance of these terms</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using the Mobile Application or its Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Mobile Application and its Services.</Text>
 
                        </View>
                        <View style={styles.container2} >
                          <Text style={styles.HeadingText} >Contacting us</Text>
                      </View>
                      <View style={styles.container3} > 
                          <Text style={styles.SubHeadingText}>If you have any questions about this Agreement, please contact us.</Text>
                          <Text style={styles.SubHeadingTextBold}>This document was last updated on July 2, 2019</Text>
                        </View>

              </View>
      </ScrollView>
        </View>
    </ImageBackground>
  </ImageBackground>

         );
   }
};



const styles = StyleSheet.create({
  containerx: {
    // flex: 1,
    // resizeMode: "center",
    // justifyContent: "center",
    // resizeMethod: "resize",
    // marginTop: 100,
    // height : Dimensions.get("window").height * .706,
    // width : Dimensions.get("window").width * 0.885,
    // alignContent:"center",
    // alignSelf:"center"
  },
    container: {
      flex: 1,
      width: "90%",

      // justifyContent: "center",
      paddingTop: 20,
      maxHeight: (Dimensions.get("window").height * .706) -150,
    },
    container2:{  
      // paddingTop:50,
      // paddingBottom:40
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderTopWidth: 0,
        // borderBottomColor: "rgba(158, 150, 150, .5);",
        // borderTopColor: "rgba(158, 150, 150, .5);",
        // paddingLeft:"5%",
        // marginBottom:"5%",
        // flexWrap:"wrap",
        // flexShrink:1,
        // flex:1
    },
    HeadingText:{
      fontSize: RFValue(24),
      color: "white",
      fontWeight: "600"
    },
    SubHeadingText:{
      // flex:1,
      // flexWrap:"wrap",
      // flexShrink: 1,
        fontSize:RFValue(15),
        color: "white",
        textAlign: "justify",
        // alignSelf:"center"
        // paddingTop:"7%",
        // paddingBottom:"3%"
    },
    SubHeadingTextBold:{
      fontSize:RFValue(15),
      color: "white",
      // alignSelf:"center",
      fontWeight: "700",
    },
    container3:{  
      // flexWrap:"wrap",
        // flexShrink:1,
        // flex:1
      // padding:10
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderTopWidth: 0,
        // borderBottomColor: "rgba(158, 150, 150, .5);",
        // borderTopColor: "rgba(158, 150, 150, .5);",
        // paddingLeft:"5%"
        padding:10
    },
    image: {
      flex: 1,
      // resizeMode: "center",
      justifyContent: "center",
      
      // resizeMethod: "resize",
    },
    image2: {
      flex: 1,
      resizeMode: "center",
      justifyContent: "center",
      // resizeMethod: "resize",
      marginTop: 80,
      height : Dimensions.get("window").height * .806,
      width : Dimensions.get("window").width * 0.9,
      // alignContent:"center",
      alignSelf:"center"
    },
    image3: {
      resizeMode: "contain",
      height : 150,
      width : 150,
      marginTop: -200,
      // alignContent:"center",
      alignSelf:"center"
    },
    scrollViewStyle:{
      height:60,
      width : "90%",
      alignContent:"center",
      alignSelf:"center",
      paddingLeft:10,
      
    },
    images:{
        maxWidth:250,
        maxHeight:250,
        alignSelf:"center",
        resizeMode:"contain"
    },
    
  }
  );
export default TermsAndConditions;