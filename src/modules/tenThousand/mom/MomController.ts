import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("moms")
export default class MomController {
  @operation({
    summary: "Get Moms",
  })
  @get()
  static getMoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mom",
  })
  @post("{id}")
  static createMom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
