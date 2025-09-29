import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxus")
export default class CxuController {
  @operation({
    summary: "Get Cxus",
  })
  @get()
  static getCxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxu",
  })
  @post("{id}")
  static createCxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
