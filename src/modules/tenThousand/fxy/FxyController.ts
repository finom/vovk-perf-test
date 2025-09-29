import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxies")
export default class FxyController {
  @operation({
    summary: "Get Fxies",
  })
  @get()
  static getFxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxy",
  })
  @post("{id}")
  static createFxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
