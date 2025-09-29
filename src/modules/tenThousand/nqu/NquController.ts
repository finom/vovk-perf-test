import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqus")
export default class NquController {
  @operation({
    summary: "Get Nqus",
  })
  @get()
  static getNqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqu",
  })
  @post("{id}")
  static createNqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
