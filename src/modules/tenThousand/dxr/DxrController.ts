import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxrs")
export default class DxrController {
  @operation({
    summary: "Get Dxrs",
  })
  @get()
  static getDxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxr",
  })
  @post("{id}")
  static createDxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
