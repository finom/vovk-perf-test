import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqus")
export default class IquController {
  @operation({
    summary: "Get Iqus",
  })
  @get()
  static getIqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqu",
  })
  @post("{id}")
  static createIqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
