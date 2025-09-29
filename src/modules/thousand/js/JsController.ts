import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("js")
export default class JsController {
  @operation({
    summary: "Get Js",
  })
  @get()
  static getJs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Js",
  })
  @post("{id}")
  static createJs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
