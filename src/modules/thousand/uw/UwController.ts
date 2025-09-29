import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uws")
export default class UwController {
  @operation({
    summary: "Get Uws",
  })
  @get()
  static getUws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uw",
  })
  @post("{id}")
  static createUw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
