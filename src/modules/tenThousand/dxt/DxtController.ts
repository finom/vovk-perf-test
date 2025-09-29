import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxts")
export default class DxtController {
  @operation({
    summary: "Get Dxts",
  })
  @get()
  static getDxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxt",
  })
  @post("{id}")
  static createDxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
