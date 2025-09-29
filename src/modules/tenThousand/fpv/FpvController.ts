import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpvs")
export default class FpvController {
  @operation({
    summary: "Get Fpvs",
  })
  @get()
  static getFpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpv",
  })
  @post("{id}")
  static createFpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
