import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alas")
export default class AlaController {
  @operation({
    summary: "Get Alas",
  })
  @get()
  static getAlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ala",
  })
  @post("{id}")
  static createAla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
