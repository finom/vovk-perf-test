import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxms")
export default class DxmController {
  @operation({
    summary: "Get Dxms",
  })
  @get()
  static getDxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxm",
  })
  @post("{id}")
  static createDxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
