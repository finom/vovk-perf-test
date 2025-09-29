import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlts")
export default class NltController {
  @operation({
    summary: "Get Nlts",
  })
  @get()
  static getNlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlt",
  })
  @post("{id}")
  static createNlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
