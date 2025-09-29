import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xws")
export default class XwController {
  @operation({
    summary: "Get Xws",
  })
  @get()
  static getXws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xw",
  })
  @post("{id}")
  static createXw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
