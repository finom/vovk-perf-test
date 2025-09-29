import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjls")
export default class KjlController {
  @operation({
    summary: "Get Kjls",
  })
  @get()
  static getKjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjl",
  })
  @post("{id}")
  static createKjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
