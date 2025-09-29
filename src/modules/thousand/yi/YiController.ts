import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yis")
export default class YiController {
  @operation({
    summary: "Get Yis",
  })
  @get()
  static getYis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yi",
  })
  @post("{id}")
  static createYi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
