import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkas")
export default class GkaController {
  @operation({
    summary: "Get Gkas",
  })
  @get()
  static getGkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gka",
  })
  @post("{id}")
  static createGka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
