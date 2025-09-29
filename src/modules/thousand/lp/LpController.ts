import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lps")
export default class LpController {
  @operation({
    summary: "Get Lps",
  })
  @get()
  static getLps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lp",
  })
  @post("{id}")
  static createLp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
