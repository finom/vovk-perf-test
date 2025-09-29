import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zs")
export default class ZsController {
  @operation({
    summary: "Get Zs",
  })
  @get()
  static getZs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zs",
  })
  @post("{id}")
  static createZs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
