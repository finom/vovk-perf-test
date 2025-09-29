import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikas")
export default class IkaController {
  @operation({
    summary: "Get Ikas",
  })
  @get()
  static getIkas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ika",
  })
  @post("{id}")
  static createIka = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
