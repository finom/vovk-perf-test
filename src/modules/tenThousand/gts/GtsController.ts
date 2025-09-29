import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gts")
export default class GtsController {
  @operation({
    summary: "Get Gts",
  })
  @get()
  static getGts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gts",
  })
  @post("{id}")
  static createGts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
