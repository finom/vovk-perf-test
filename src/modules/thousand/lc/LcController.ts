import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcs")
export default class LcController {
  @operation({
    summary: "Get Lcs",
  })
  @get()
  static getLcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lc",
  })
  @post("{id}")
  static createLc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
