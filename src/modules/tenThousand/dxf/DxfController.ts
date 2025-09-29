import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxfs")
export default class DxfController {
  @operation({
    summary: "Get Dxfs",
  })
  @get()
  static getDxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxf",
  })
  @post("{id}")
  static createDxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
