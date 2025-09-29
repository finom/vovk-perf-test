import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bims")
export default class BimController {
  @operation({
    summary: "Get Bims",
  })
  @get()
  static getBims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bim",
  })
  @post("{id}")
  static createBim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
