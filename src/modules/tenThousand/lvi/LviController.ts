import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvis")
export default class LviController {
  @operation({
    summary: "Get Lvis",
  })
  @get()
  static getLvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvi",
  })
  @post("{id}")
  static createLvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
