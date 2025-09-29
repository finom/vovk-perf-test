import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkas")
export default class BkaController {
  @operation({
    summary: "Get Bkas",
  })
  @get()
  static getBkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bka",
  })
  @post("{id}")
  static createBka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
