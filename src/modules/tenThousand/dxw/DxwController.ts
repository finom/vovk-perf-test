import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxws")
export default class DxwController {
  @operation({
    summary: "Get Dxws",
  })
  @get()
  static getDxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxw",
  })
  @post("{id}")
  static createDxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
