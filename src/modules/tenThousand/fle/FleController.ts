import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fles")
export default class FleController {
  @operation({
    summary: "Get Fles",
  })
  @get()
  static getFles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fle",
  })
  @post("{id}")
  static createFle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
