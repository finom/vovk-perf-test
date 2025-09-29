import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzhs")
export default class HzhController {
  @operation({
    summary: "Get Hzhs",
  })
  @get()
  static getHzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzh",
  })
  @post("{id}")
  static createHzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
