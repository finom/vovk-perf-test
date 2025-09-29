import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktrs")
export default class KtrController {
  @operation({
    summary: "Get Ktrs",
  })
  @get()
  static getKtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktr",
  })
  @post("{id}")
  static createKtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
