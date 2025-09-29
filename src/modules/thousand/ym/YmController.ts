import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yms")
export default class YmController {
  @operation({
    summary: "Get Yms",
  })
  @get()
  static getYms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ym",
  })
  @post("{id}")
  static createYm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
