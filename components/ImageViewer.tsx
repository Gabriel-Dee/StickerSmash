import { StyleSheet } from "react-native";
import { Image } from "react-native";

type ImageViewerProps = {
  selectedImage: any;
};

export default function ImageViewer({ selectedImage }: ImageViewerProps) {
  return <Image source={selectedImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
