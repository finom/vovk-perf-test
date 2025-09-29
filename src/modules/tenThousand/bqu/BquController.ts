import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqus")
export default class BquController {
  @operation({
    summary: "Get Bqus",
  })
  @get()
  static getBqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqu",
  })
  @post("{id}")
  static createBqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
