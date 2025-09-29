import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anms")
export default class AnmController {
  @operation({
    summary: "Get Anms",
  })
  @get()
  static getAnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anm",
  })
  @post("{id}")
  static createAnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
