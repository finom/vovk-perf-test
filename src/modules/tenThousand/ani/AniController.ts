import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anis")
export default class AniController {
  @operation({
    summary: "Get Anis",
  })
  @get()
  static getAnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ani",
  })
  @post("{id}")
  static createAni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
