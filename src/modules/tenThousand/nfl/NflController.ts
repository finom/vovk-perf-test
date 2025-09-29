import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfls")
export default class NflController {
  @operation({
    summary: "Get Nfls",
  })
  @get()
  static getNfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfl",
  })
  @post("{id}")
  static createNfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
