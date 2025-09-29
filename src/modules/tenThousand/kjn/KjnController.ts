import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjns")
export default class KjnController {
  @operation({
    summary: "Get Kjns",
  })
  @get()
  static getKjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjn",
  })
  @post("{id}")
  static createKjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
