import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("locs")
export default class LocController {
  @operation({
    summary: "Get Locs",
  })
  @get()
  static getLocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loc",
  })
  @post("{id}")
  static createLoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
