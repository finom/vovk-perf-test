import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzjs")
export default class JzjController {
  @operation({
    summary: "Get Jzjs",
  })
  @get()
  static getJzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzj",
  })
  @post("{id}")
  static createJzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
