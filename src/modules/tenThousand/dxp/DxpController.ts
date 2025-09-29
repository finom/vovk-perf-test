import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxps")
export default class DxpController {
  @operation({
    summary: "Get Dxps",
  })
  @get()
  static getDxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxp",
  })
  @post("{id}")
  static createDxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
