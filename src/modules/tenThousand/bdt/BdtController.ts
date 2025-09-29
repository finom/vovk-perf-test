import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdts")
export default class BdtController {
  @operation({
    summary: "Get Bdts",
  })
  @get()
  static getBdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdt",
  })
  @post("{id}")
  static createBdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
