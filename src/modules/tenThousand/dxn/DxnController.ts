import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxns")
export default class DxnController {
  @operation({
    summary: "Get Dxns",
  })
  @get()
  static getDxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxn",
  })
  @post("{id}")
  static createDxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
