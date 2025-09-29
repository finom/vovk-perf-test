import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmgs")
export default class GmgController {
  @operation({
    summary: "Get Gmgs",
  })
  @get()
  static getGmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmg",
  })
  @post("{id}")
  static createGmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
