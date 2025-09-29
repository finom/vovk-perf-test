import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckas")
export default class CkaController {
  @operation({
    summary: "Get Ckas",
  })
  @get()
  static getCkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cka",
  })
  @post("{id}")
  static createCka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
