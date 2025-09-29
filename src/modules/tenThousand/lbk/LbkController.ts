import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbks")
export default class LbkController {
  @operation({
    summary: "Get Lbks",
  })
  @get()
  static getLbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbk",
  })
  @post("{id}")
  static createLbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
