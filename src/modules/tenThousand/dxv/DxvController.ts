import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxvs")
export default class DxvController {
  @operation({
    summary: "Get Dxvs",
  })
  @get()
  static getDxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxv",
  })
  @post("{id}")
  static createDxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
