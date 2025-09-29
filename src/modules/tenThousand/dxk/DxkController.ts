import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxks")
export default class DxkController {
  @operation({
    summary: "Get Dxks",
  })
  @get()
  static getDxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxk",
  })
  @post("{id}")
  static createDxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
