import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnis")
export default class LniController {
  @operation({
    summary: "Get Lnis",
  })
  @get()
  static getLnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lni",
  })
  @post("{id}")
  static createLni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
