import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lifs")
export default class LifController {
  @operation({
    summary: "Get Lifs",
  })
  @get()
  static getLifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lif",
  })
  @post("{id}")
  static createLif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
