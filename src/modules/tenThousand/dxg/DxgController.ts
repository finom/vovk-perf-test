import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxgs")
export default class DxgController {
  @operation({
    summary: "Get Dxgs",
  })
  @get()
  static getDxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxg",
  })
  @post("{id}")
  static createDxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
