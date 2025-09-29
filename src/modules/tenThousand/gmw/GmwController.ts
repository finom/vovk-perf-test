import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmws")
export default class GmwController {
  @operation({
    summary: "Get Gmws",
  })
  @get()
  static getGmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmw",
  })
  @post("{id}")
  static createGmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
