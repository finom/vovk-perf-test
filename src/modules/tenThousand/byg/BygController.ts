import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bygs")
export default class BygController {
  @operation({
    summary: "Get Bygs",
  })
  @get()
  static getBygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byg",
  })
  @post("{id}")
  static createByg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
