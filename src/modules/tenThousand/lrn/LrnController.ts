import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrns")
export default class LrnController {
  @operation({
    summary: "Get Lrns",
  })
  @get()
  static getLrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrn",
  })
  @post("{id}")
  static createLrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
