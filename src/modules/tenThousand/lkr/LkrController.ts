import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkrs")
export default class LkrController {
  @operation({
    summary: "Get Lkrs",
  })
  @get()
  static getLkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkr",
  })
  @post("{id}")
  static createLkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
