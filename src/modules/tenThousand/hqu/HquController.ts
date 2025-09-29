import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqus")
export default class HquController {
  @operation({
    summary: "Get Hqus",
  })
  @get()
  static getHqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqu",
  })
  @post("{id}")
  static createHqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
