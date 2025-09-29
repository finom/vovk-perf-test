import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtxes")
export default class GtxController {
  @operation({
    summary: "Get Gtxes",
  })
  @get()
  static getGtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtx",
  })
  @post("{id}")
  static createGtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
