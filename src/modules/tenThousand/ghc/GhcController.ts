import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghcs")
export default class GhcController {
  @operation({
    summary: "Get Ghcs",
  })
  @get()
  static getGhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghc",
  })
  @post("{id}")
  static createGhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
