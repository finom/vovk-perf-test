import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekies")
export default class EkyController {
  @operation({
    summary: "Get Ekies",
  })
  @get()
  static getEkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eky",
  })
  @post("{id}")
  static createEky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
