import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpts")
export default class LptController {
  @operation({
    summary: "Get Lpts",
  })
  @get()
  static getLpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpt",
  })
  @post("{id}")
  static createLpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
