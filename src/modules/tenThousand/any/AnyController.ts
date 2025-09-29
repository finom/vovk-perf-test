import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anies")
export default class AnyController {
  @operation({
    summary: "Get Anies",
  })
  @get()
  static getAnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Any",
  })
  @post("{id}")
  static createAny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
