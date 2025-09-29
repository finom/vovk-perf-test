import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aels")
export default class AelController {
  @operation({
    summary: "Get Aels",
  })
  @get()
  static getAels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ael",
  })
  @post("{id}")
  static createAel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
