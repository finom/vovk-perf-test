import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcms")
export default class DcmController {
  @operation({
    summary: "Get Dcms",
  })
  @get()
  static getDcms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcm",
  })
  @post("{id}")
  static createDcm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
