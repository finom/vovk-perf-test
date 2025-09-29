import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imis")
export default class ImiController {
  @operation({
    summary: "Get Imis",
  })
  @get()
  static getImis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imi",
  })
  @post("{id}")
  static createImi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
