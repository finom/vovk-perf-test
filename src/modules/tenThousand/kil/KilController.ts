import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kils")
export default class KilController {
  @operation({
    summary: "Get Kils",
  })
  @get()
  static getKils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kil",
  })
  @post("{id}")
  static createKil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
