import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cids")
export default class CidController {
  @operation({
    summary: "Get Cids",
  })
  @get()
  static getCids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cid",
  })
  @post("{id}")
  static createCid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
