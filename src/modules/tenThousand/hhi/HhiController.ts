import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhis")
export default class HhiController {
  @operation({
    summary: "Get Hhis",
  })
  @get()
  static getHhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhi",
  })
  @post("{id}")
  static createHhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
