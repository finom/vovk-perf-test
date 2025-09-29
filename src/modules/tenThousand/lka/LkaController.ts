import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkas")
export default class LkaController {
  @operation({
    summary: "Get Lkas",
  })
  @get()
  static getLkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lka",
  })
  @post("{id}")
  static createLka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
