import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxqs")
export default class DxqController {
  @operation({
    summary: "Get Dxqs",
  })
  @get()
  static getDxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxq",
  })
  @post("{id}")
  static createDxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
