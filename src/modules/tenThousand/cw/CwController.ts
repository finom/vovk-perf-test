import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cws")
export default class CwController {
  @operation({
    summary: "Get Cws",
  })
  @get()
  static getCws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cw",
  })
  @post("{id}")
  static createCw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
