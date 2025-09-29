import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyds")
export default class HydController {
  @operation({
    summary: "Get Hyds",
  })
  @get()
  static getHyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyd",
  })
  @post("{id}")
  static createHyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
