import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htxes")
export default class HtxController {
  @operation({
    summary: "Get Htxes",
  })
  @get()
  static getHtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htx",
  })
  @post("{id}")
  static createHtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
