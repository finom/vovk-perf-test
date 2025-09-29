import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkas")
export default class KkaController {
  @operation({
    summary: "Get Kkas",
  })
  @get()
  static getKkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kka",
  })
  @post("{id}")
  static createKka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
