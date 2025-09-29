import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcgs")
export default class DcgController {
  @operation({
    summary: "Get Dcgs",
  })
  @get()
  static getDcgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcg",
  })
  @post("{id}")
  static createDcg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
