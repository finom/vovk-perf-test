import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myls")
export default class MylController {
  @operation({
    summary: "Get Myls",
  })
  @get()
  static getMyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myl",
  })
  @post("{id}")
  static createMyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
