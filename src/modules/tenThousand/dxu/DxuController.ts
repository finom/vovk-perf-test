import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxus")
export default class DxuController {
  @operation({
    summary: "Get Dxus",
  })
  @get()
  static getDxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxu",
  })
  @post("{id}")
  static createDxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
