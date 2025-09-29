import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqus")
export default class CquController {
  @operation({
    summary: "Get Cqus",
  })
  @get()
  static getCqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqu",
  })
  @post("{id}")
  static createCqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
