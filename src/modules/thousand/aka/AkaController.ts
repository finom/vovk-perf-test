import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akas")
export default class AkaController {
  @operation({
    summary: "Get Akas",
  })
  @get()
  static getAkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aka",
  })
  @post("{id}")
  static createAka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
