import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehks")
export default class EhkController {
  @operation({
    summary: "Get Ehks",
  })
  @get()
  static getEhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehk",
  })
  @post("{id}")
  static createEhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
