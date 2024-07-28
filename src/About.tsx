import {View, Text} from "react-native";

export const About: ({title}: { title: string }) => JSX.Element = ({ title }: {title: string}) => {
    return (
        <View style={{ padding: 10 }}>
            <Text>Hello to {title}</Text>
        </View>
    );
}