import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkies")
export default class GkyController {
  @operation({
    summary: "Get Gkies",
  })
  @get()
  static getGkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gky",
  })
  @post("{id}")
  static createGky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
