import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzjs")
export default class HzjController {
  @operation({
    summary: "Get Hzjs",
  })
  @get()
  static getHzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzj",
  })
  @post("{id}")
  static createHzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
