import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hs")
export default class HsController {
  @operation({
    summary: "Get Hs",
  })
  @get()
  static getHs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hs",
  })
  @post("{id}")
  static createHs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
