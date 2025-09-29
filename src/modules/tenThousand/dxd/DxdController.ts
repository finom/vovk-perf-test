import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxds")
export default class DxdController {
  @operation({
    summary: "Get Dxds",
  })
  @get()
  static getDxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxd",
  })
  @post("{id}")
  static createDxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
