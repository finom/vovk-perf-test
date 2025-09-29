import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvls")
export default class FvlController {
  @operation({
    summary: "Get Fvls",
  })
  @get()
  static getFvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvl",
  })
  @post("{id}")
  static createFvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
