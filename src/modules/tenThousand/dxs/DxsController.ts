import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxs")
export default class DxsController {
  @operation({
    summary: "Get Dxs",
  })
  @get()
  static getDxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxs",
  })
  @post("{id}")
  static createDxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
