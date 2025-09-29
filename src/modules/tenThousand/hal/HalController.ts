import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hals")
export default class HalController {
  @operation({
    summary: "Get Hals",
  })
  @get()
  static getHals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hal",
  })
  @post("{id}")
  static createHal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
