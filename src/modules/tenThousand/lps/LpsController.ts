import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lps")
export default class LpsController {
  @operation({
    summary: "Get Lps",
  })
  @get()
  static getLps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lps",
  })
  @post("{id}")
  static createLps = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
