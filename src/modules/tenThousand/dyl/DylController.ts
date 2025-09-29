import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyls")
export default class DylController {
  @operation({
    summary: "Get Dyls",
  })
  @get()
  static getDyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyl",
  })
  @post("{id}")
  static createDyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
