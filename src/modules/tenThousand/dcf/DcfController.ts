import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcfs")
export default class DcfController {
  @operation({
    summary: "Get Dcfs",
  })
  @get()
  static getDcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcf",
  })
  @post("{id}")
  static createDcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
