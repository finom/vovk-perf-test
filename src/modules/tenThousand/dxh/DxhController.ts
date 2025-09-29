import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxhs")
export default class DxhController {
  @operation({
    summary: "Get Dxhs",
  })
  @get()
  static getDxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxh",
  })
  @post("{id}")
  static createDxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
