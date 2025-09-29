import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxies")
export default class DxyController {
  @operation({
    summary: "Get Dxies",
  })
  @get()
  static getDxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxy",
  })
  @post("{id}")
  static createDxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
