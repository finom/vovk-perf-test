import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzs")
export default class BzsController {
  @operation({
    summary: "Get Bzs",
  })
  @get()
  static getBzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzs",
  })
  @post("{id}")
  static createBzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
