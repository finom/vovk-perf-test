import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guts")
export default class GutController {
  @operation({
    summary: "Get Guts",
  })
  @get()
  static getGuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gut",
  })
  @post("{id}")
  static createGut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
