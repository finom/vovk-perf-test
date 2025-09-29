import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnies")
export default class LnyController {
  @operation({
    summary: "Get Lnies",
  })
  @get()
  static getLnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lny",
  })
  @post("{id}")
  static createLny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
