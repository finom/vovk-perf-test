import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fids")
export default class FidController {
  @operation({
    summary: "Get Fids",
  })
  @get()
  static getFids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fid",
  })
  @post("{id}")
  static createFid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
