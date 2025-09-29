import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmws")
export default class FmwController {
  @operation({
    summary: "Get Fmws",
  })
  @get()
  static getFmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmw",
  })
  @post("{id}")
  static createFmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
