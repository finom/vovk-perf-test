import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ciws")
export default class CiwController {
  @operation({
    summary: "Get Ciws",
  })
  @get()
  static getCiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ciw",
  })
  @post("{id}")
  static createCiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
