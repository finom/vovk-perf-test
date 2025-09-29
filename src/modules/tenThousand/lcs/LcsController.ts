import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcs")
export default class LcsController {
  @operation({
    summary: "Get Lcs",
  })
  @get()
  static getLcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcs",
  })
  @post("{id}")
  static createLcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
