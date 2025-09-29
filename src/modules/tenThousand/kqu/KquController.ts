import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqus")
export default class KquController {
  @operation({
    summary: "Get Kqus",
  })
  @get()
  static getKqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqu",
  })
  @post("{id}")
  static createKqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
