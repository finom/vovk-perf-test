import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dygs")
export default class DygController {
  @operation({
    summary: "Get Dygs",
  })
  @get()
  static getDygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyg",
  })
  @post("{id}")
  static createDyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
