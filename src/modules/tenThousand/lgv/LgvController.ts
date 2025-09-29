import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgvs")
export default class LgvController {
  @operation({
    summary: "Get Lgvs",
  })
  @get()
  static getLgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgv",
  })
  @post("{id}")
  static createLgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
