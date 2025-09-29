import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkas")
export default class MkaController {
  @operation({
    summary: "Get Mkas",
  })
  @get()
  static getMkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mka",
  })
  @post("{id}")
  static createMka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
