import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjbs")
export default class KjbController {
  @operation({
    summary: "Get Kjbs",
  })
  @get()
  static getKjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjb",
  })
  @post("{id}")
  static createKjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
