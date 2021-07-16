import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 10
      },
      cardView: {
        flexDirection: 'column',
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
        width: '94%',
        minHeight: 650
      },
      promotionImage: {
        flex: 2,
        width: '100%'
      },
      descriptionText: {
        flex: 1
      },
      titleText: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        margin: 10
      },
      priceText: {
        textAlign: "center",
        color: "#111",
        fontWeight: "bold",
        fontSize: 30,
        margin: 10
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