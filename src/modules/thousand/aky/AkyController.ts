import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akies")
export default class AkyController {
  @operation({
    summary: "Get Akies",
  })
  @get()
  static getAkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aky",
  })
  @post("{id}")
  static createAky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
