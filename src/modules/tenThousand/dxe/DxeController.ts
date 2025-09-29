import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxes")
export default class DxeController {
  @operation({
    summary: "Get Dxes",
  })
  @get()
  static getDxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxe",
  })
  @post("{id}")
  static createDxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
