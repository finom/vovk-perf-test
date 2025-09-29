import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxls")
export default class DxlController {
  @operation({
    summary: "Get Dxls",
  })
  @get()
  static getDxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxl",
  })
  @post("{id}")
  static createDxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
