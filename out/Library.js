import { ofArray } from "./fable_modules/fable-library-js.4.19.3/List.js";
import { Union, Record } from "./fable_modules/fable-library-js.4.19.3/Types.js";
import { union_type, int32_type, anonRecord_type, record_type, lambda_type, unit_type, string_type } from "./fable_modules/fable-library-js.4.19.3/Reflection.js";
import React from "react";
import { createElement } from "./fable_modules/Feliz.ReactNative.0.8.2/Interop.fs.js";
import { StatusBar, Pressable, Text as Text$, View } from "react-native";
import { createObj } from "./fable_modules/fable-library-js.4.19.3/Util.js";
import { Interop_reactApi } from "./fable_modules/Feliz.2.3.0/Interop.fs.js";
import { Cmd_none } from "./fable_modules/Fable.Elmish.4.0.0/cmd.fs.js";
import { React_useElmish_Z6C327F2E } from "./fable_modules/Feliz.UseElmish.2.5.0/UseElmish.fs.js";
import { ProgramModule_mkProgram } from "./fable_modules/Fable.Elmish.4.0.0/program.fs.js";

export function hello(name) {
    return `Hello ${name},`;
}

const middleCentre = ofArray([["flex", 1], ["alignItems", "center"], ["justifyContent", "center"]]);

export class Navigator extends Record {
    constructor(navigate) {
        super();
        this.navigate = navigate;
    }
}

export function Navigator_$reflection() {
    return record_type("App.Say.Navigator", [], Navigator, () => [["navigate", lambda_type(string_type, unit_type)]]);
}

export class NavProps extends Record {
    constructor(route, navigation) {
        super();
        this.route = route;
        this.navigation = navigation;
    }
}

export function NavProps_$reflection() {
    return record_type("App.Say.NavProps", [], NavProps, () => [["route", anonRecord_type(["name", string_type])], ["navigation", Navigator_$reflection()]]);
}

export function View1(props) {
    let elems_1, elems;
    return createElement(View, createObj(ofArray([["style", createObj(middleCentre)], (elems_1 = [createElement(Text$, {
        children: "View1",
    }), createElement(Pressable, createObj(ofArray([["onPress", (_arg) => {
        props.navigation.navigate("View2");
    }], (elems = [createElement(Text$, {
        children: `From ${props.route.name} to View2`,
    })], ["children", Interop_reactApi.Children.toArray(Array.from(elems))])]))), createElement(StatusBar, {})], ["children", Interop_reactApi.Children.toArray(Array.from(elems_1))])])));
}

export class Model extends Record {
    constructor(Counter) {
        super();
        this.Counter = (Counter | 0);
    }
}

export function Model_$reflection() {
    return record_type("App.Say.Model", [], Model, () => [["Counter", int32_type]]);
}

export class Msg extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Increment", "Decrement"];
    }
}

export function Msg_$reflection() {
    return union_type("App.Say.Msg", [], Msg, () => [[], []]);
}

function init() {
    return [new Model(0), Cmd_none()];
}

function update(msg, model) {
    if (msg.tag === 1) {
        return [new Model(model.Counter - 1), Cmd_none()];
    }
    else {
        return [new Model(model.Counter + 1), Cmd_none()];
    }
}

export function View2() {
    let elems, elems_1;
    const patternInput = React_useElmish_Z6C327F2E(() => ProgramModule_mkProgram(init, update, (_arg, _arg_1) => {
    }), undefined, undefined);
    const model_1 = patternInput[0];
    const dispatch = patternInput[1];
    const children = [createElement(Text$, {
        children: "View2",
    }), createElement(Text$, {
        children: `${model_1.Counter}`,
    }), createElement(Pressable, createObj(ofArray([["onPress", (_arg_2) => {
        dispatch(new Msg(0, []));
    }], (elems = [createElement(Text$, {
        children: "Up",
    })], ["children", Interop_reactApi.Children.toArray(Array.from(elems))])]))), createElement(Pressable, createObj(ofArray([["onPress", (_arg_3) => {
        dispatch(new Msg(1, []));
    }], (elems_1 = [createElement(Text$, {
        children: "Down",
    })], ["children", Interop_reactApi.Children.toArray(Array.from(elems_1))])]))), createElement(StatusBar, {})];
    return createElement(View, {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

