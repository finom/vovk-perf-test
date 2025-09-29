import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zs")
export default class ZController {
  @operation({
    summary: "Get ZS",
  })
  @get()
  static getZS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Z",
  })
  @post("{id}")
  static createZ = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
