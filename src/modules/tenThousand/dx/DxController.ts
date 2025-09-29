import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxes")
export default class DxController {
  @operation({
    summary: "Get Dxes",
  })
  @get()
  static getDxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dx",
  })
  @post("{id}")
  static createDx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
