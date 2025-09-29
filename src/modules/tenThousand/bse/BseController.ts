import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bses")
export default class BseController {
  @operation({
    summary: "Get Bses",
  })
  @get()
  static getBses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bse",
  })
  @post("{id}")
  static createBse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
