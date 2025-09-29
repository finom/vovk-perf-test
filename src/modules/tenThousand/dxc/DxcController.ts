import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxcs")
export default class DxcController {
  @operation({
    summary: "Get Dxcs",
  })
  @get()
  static getDxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxc",
  })
  @post("{id}")
  static createDxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
