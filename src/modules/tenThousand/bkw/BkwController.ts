import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkws")
export default class BkwController {
  @operation({
    summary: "Get Bkws",
  })
  @get()
  static getBkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bkw",
  })
  @post("{id}")
  static createBkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
