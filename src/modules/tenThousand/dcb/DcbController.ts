import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcbs")
export default class DcbController {
  @operation({
    summary: "Get Dcbs",
  })
  @get()
  static getDcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcb",
  })
  @post("{id}")
  static createDcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
