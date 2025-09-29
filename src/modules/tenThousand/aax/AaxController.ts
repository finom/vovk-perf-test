import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaxes")
export default class AaxController {
  @operation({
    summary: "Get Aaxes",
  })
  @get()
  static getAaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aax",
  })
  @post("{id}")
  static createAax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
