import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrxes")
export default class LrxController {
  @operation({
    summary: "Get Lrxes",
  })
  @get()
  static getLrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrx",
  })
  @post("{id}")
  static createLrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
