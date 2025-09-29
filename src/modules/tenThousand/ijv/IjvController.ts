import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijvs")
export default class IjvController {
  @operation({
    summary: "Get Ijvs",
  })
  @get()
  static getIjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijv",
  })
  @post("{id}")
  static createIjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
