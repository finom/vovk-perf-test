import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yks")
export default class YkController {
  @operation({
    summary: "Get Yks",
  })
  @get()
  static getYks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yk",
  })
  @post("{id}")
  static createYk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
