import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
      },
      cardView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '98%',
        minHeight: 180
      },
      promotionImage: {
        width: '40%'
      },
      descriptionText: {
        flex: 1,
        justifyContent: "center",
      },
      titleText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        margin: 5
      },
      priceText: {
        color: "#111",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        margin: 5
      },
      linkButton: {
        backgroundColor: "#111",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5        
      },
      textLinkButton: {
        color: "#FFFFFF",
        textAlign: 'center'
      }
    
});

export default styles;