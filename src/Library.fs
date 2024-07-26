namespace App
open Elmish
open Feliz.ReactNative
open Feliz.UseElmish

module Say =
    let hello name =
         $"Hello {name},"
         
    let private middleCentre = [style.flex 1; style.alignItems.center; style.justifyContent.center]
    
    type Navigator = {
        navigate: string -> unit
    }
    
    type NavProps =  { route: {| name: string |}; navigation: Navigator}
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
                Comp.statusBar []
            ]
        ]
        
    type Model = {
        Counter : int
    }
    
    type Msg =
        | Increment
        | Decrement
        
    let private init () =
        { Counter = 0 }, Cmd.none
        
    let private update msg model =
        match msg with
        | Increment -> { model with Counter = model.Counter + 1 }, Cmd.none
        | Decrement -> { model with Counter = model.Counter - 1 }, Cmd.none
        
    let View2 () =
        let model, dispatch = React.useElmish(init, update)
        Comp.view [
            Comp.text [ prop.text "View2" ]
            Comp.text [
                // prop.style middleCentre
                prop.text $"{model.Counter}"
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
            Comp.statusBar []
        ]
