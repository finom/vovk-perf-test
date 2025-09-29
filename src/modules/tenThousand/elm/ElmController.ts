import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elms")
export default class ElmController {
  @operation({
    summary: "Get Elms",
  })
  @get()
  static getElms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elm",
  })
  @post("{id}")
  static createElm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
