import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcvs")
export default class DcvController {
  @operation({
    summary: "Get Dcvs",
  })
  @get()
  static getDcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcv",
  })
  @post("{id}")
  static createDcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
