import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqus")
export default class GquController {
  @operation({
    summary: "Get Gqus",
  })
  @get()
  static getGqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqu",
  })
  @post("{id}")
  static createGqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
