import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsvs")
export default class LsvController {
  @operation({
    summary: "Get Lsvs",
  })
  @get()
  static getLsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsv",
  })
  @post("{id}")
  static createLsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
