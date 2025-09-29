import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kws")
export default class KwController {
  @operation({
    summary: "Get Kws",
  })
  @get()
  static getKws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kw",
  })
  @post("{id}")
  static createKw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
