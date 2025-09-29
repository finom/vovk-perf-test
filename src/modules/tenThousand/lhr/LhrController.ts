import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhrs")
export default class LhrController {
  @operation({
    summary: "Get Lhrs",
  })
  @get()
  static getLhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhr",
  })
  @post("{id}")
  static createLhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
