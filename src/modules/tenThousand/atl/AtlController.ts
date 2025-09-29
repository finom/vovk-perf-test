import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atls")
export default class AtlController {
  @operation({
    summary: "Get Atls",
  })
  @get()
  static getAtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atl",
  })
  @post("{id}")
  static createAtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
