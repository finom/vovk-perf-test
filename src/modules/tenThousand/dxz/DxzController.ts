import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxzs")
export default class DxzController {
  @operation({
    summary: "Get Dxzs",
  })
  @get()
  static getDxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxz",
  })
  @post("{id}")
  static createDxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
