import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtxes")
export default class DtxController {
  @operation({
    summary: "Get Dtxes",
  })
  @get()
  static getDtxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtx",
  })
  @post("{id}")
  static createDtx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
