import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ashes")
export default class AshController {
  @operation({
    summary: "Get Ashes",
  })
  @get()
  static getAshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ash",
  })
  @post("{id}")
  static createAsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
