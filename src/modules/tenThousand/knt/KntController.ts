import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knts")
export default class KntController {
  @operation({
    summary: "Get Knts",
  })
  @get()
  static getKnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knt",
  })
  @post("{id}")
  static createKnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
