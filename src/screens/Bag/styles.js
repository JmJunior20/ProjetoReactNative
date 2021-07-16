import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        width: '94%',
        minHeight: 150
      },
      promotionImage: {
        width: 100,
        height: 100,
      },
      descriptionText: {
        flex: 1
      },
      titleText: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        margin: 10
      },
      priceText: {
        textAlign: "center",
        color: "#111",
        fontWeight: "bold",
        fontSize: 16,
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
      },
      homeButton: {
        backgroundColor: "gray",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5
      },
    
});

export default styles;