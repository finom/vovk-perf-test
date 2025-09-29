import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krbs")
export default class KrbController {
  @operation({
    summary: "Get Krbs",
  })
  @get()
  static getKrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krb",
  })
  @post("{id}")
  static createKrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
