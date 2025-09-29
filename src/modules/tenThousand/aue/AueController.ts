import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aues")
export default class AueController {
  @operation({
    summary: "Get Aues",
  })
  @get()
  static getAues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aue",
  })
  @post("{id}")
  static createAue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
