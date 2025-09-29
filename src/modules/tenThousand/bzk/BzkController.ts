import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzks")
export default class BzkController {
  @operation({
    summary: "Get Bzks",
  })
  @get()
  static getBzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzk",
  })
  @post("{id}")
  static createBzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
