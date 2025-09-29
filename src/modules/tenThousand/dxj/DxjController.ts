import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxjs")
export default class DxjController {
  @operation({
    summary: "Get Dxjs",
  })
  @get()
  static getDxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxj",
  })
  @post("{id}")
  static createDxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
