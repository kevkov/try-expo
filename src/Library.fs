﻿namespace App
open Elmish
open Feliz.ReactNative
open Feliz.UseElmish
open Fetch
open Feliz
open Fable.Core


module Say =
    let hello name =
         $"Hello {name},"
         
    let private middleCentre = [style.flex 1; style.alignItems.center; style.justifyContent.center]
    
    type Navigator = {
        navigate: string -> unit
    }
    
    type NavProps =  {| route: {| name: string |}; navigation: Navigator|}

    [<ReactComponent>]     
    let View1 (props: NavProps) =
        Comp.view [ 
            prop.style middleCentre
            prop.children [
                Comp.text [ prop.text "View1" ]
                Comp.pressable [
                    prop.onPress (fun _ -> props.navigation.navigate "View2")
                    prop.children [
                        Comp.text [ prop.text $"From {props.route.name} to View2" ]
                    ]
                ]
                Comp.pressable [
                    prop.onPress (fun _ -> props.navigation.navigate "View3")
                    prop.children [
                        Comp.text [ prop.text $"From {props.route.name} to View3" ]
                    ]
                    
                ]
                Comp.pressable [
                    prop.onPress (fun _ -> props.navigation.navigate "View4")
                    prop.children [
                        Comp.text [ prop.text $"View4" ]
                    ]
                ]
                Comp.statusBar []
            ]
        ]
        
    type Model = {
        Counter : int
        ServiceResult: string
    }
    
    type Msg =
        | Increment
        | Decrement
        | CallService
        | ServiceCalled of string
        
    let private init () =
        { Counter = 0; ServiceResult = "dunno" }, Cmd.none
        
    let private update msg model =
        
        let callService () = promise {
            let! response = fetch "https://sampleapis.com/futurama/api/characters" []
            return ()
        }
        
        match msg with
        | Increment -> { model with Counter = model.Counter + 1 }, Cmd.none
        | Decrement -> { model with Counter = model.Counter - 1 }, Cmd.none
        | CallService -> model, Cmd.OfPromise.either callService () (fun _ -> ServiceCalled "success") (fun _ -> ServiceCalled"failed :)")
        | ServiceCalled s -> { model with ServiceResult = s }, Cmd.none
        
    let View2 () =
        let model, dispatch = React.useElmish(init, update)
        Comp.view [
            Comp.text [ prop.text "View2" ]
            Comp.text [
                // prop.style middleCentre
                prop.text $"{model.Counter}"
            ]
            Comp.text [
                // prop.style middleCentre
                prop.text $"{model.ServiceResult} {model.Counter}"
            ]
            Comp.pressable [
                prop.onPress (fun _ -> dispatch Increment)
                prop.children [
                    Comp.text [ prop.text "Up" ]
                ]
            ]
            Comp.pressable [
                prop.onPress (fun _ -> dispatch Decrement)
                prop.children [
                    Comp.text [ prop.text "Down" ]
                ]
            ]
            Comp.pressable [
                prop.onPress (fun _ -> dispatch CallService)
                prop.children [
                    Comp.text [ prop.text "Call" ]
                ]
            ]
            Comp.statusBar []
        ]
        
    [<ReactComponent(import="About", from="./About.tsx")>]
    let About (title: string) = React.imported()
    let View3 () =
        About "me"
        
    [<JSX.Component>]    
    let View4 () =
        JSX.jsx
            // because something generates import {{ Text as Text$ }} from ... elsewhere
            // also you have to be very precise about the import, e.g. no comments above or inline
            $"""
            import {{View, Text as T}} from "react-native";

            <View>
                <T>JSX view</T>
            </View>
        """
