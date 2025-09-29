import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crxes")
export default class CrxController {
  @operation({
    summary: "Get Crxes",
  })
  @get()
  static getCrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crx",
  })
  @post("{id}")
  static createCrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
