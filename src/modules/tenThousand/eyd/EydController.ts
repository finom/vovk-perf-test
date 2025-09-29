import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyds")
export default class EydController {
  @operation({
    summary: "Get Eyds",
  })
  @get()
  static getEyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyd",
  })
  @post("{id}")
  static createEyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
