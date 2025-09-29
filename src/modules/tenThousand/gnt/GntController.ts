import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnts")
export default class GntController {
  @operation({
    summary: "Get Gnts",
  })
  @get()
  static getGnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnt",
  })
  @post("{id}")
  static createGnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
