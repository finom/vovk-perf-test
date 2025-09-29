import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcxes")
export default class DcxController {
  @operation({
    summary: "Get Dcxes",
  })
  @get()
  static getDcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcx",
  })
  @post("{id}")
  static createDcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
