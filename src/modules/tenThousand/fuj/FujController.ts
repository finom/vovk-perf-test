import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fujs")
export default class FujController {
  @operation({
    summary: "Get Fujs",
  })
  @get()
  static getFujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuj",
  })
  @post("{id}")
  static createFuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
