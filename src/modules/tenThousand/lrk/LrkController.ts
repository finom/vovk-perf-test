import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrks")
export default class LrkController {
  @operation({
    summary: "Get Lrks",
  })
  @get()
  static getLrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrk",
  })
  @post("{id}")
  static createLrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
