namespace App
open Feliz.ReactNative

module Say =
    let hello name =
         $"Hello {name},"
         
    let private middleCentre = [style.flex 1; style.alignItems.center; style.justifyContent.center]
    [<ReactComponent>]     
    let View1 () =
        Comp.view [
            prop.style middleCentre
            prop.children [
                Comp.text [ prop.text "View1" ]
                Comp.statusBar []
            ]
        ]
        
    let View2 () =
        Comp.view [
            Comp.text [ prop.text "View2" ]
            Comp.statusBar []
        ]
