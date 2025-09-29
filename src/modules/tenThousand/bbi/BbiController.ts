import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbis")
export default class BbiController {
  @operation({
    summary: "Get Bbis",
  })
  @get()
  static getBbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbi",
  })
  @post("{id}")
  static createBbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
