import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eebs")
export default class EebController {
  @operation({
    summary: "Get Eebs",
  })
  @get()
  static getEebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eeb",
  })
  @post("{id}")
  static createEeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
