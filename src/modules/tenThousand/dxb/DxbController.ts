import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxbs")
export default class DxbController {
  @operation({
    summary: "Get Dxbs",
  })
  @get()
  static getDxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxb",
  })
  @post("{id}")
  static createDxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
