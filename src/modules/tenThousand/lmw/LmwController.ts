import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmws")
export default class LmwController {
  @operation({
    summary: "Get Lmws",
  })
  @get()
  static getLmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmw",
  })
  @post("{id}")
  static createLmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
