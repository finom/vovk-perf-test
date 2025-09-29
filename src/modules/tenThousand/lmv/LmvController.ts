import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmvs")
export default class LmvController {
  @operation({
    summary: "Get Lmvs",
  })
  @get()
  static getLmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmv",
  })
  @post("{id}")
  static createLmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
