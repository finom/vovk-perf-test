import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyds")
export default class JydController {
  @operation({
    summary: "Get Jyds",
  })
  @get()
  static getJyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyd",
  })
  @post("{id}")
  static createJyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
