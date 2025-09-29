import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egxes")
export default class EgxController {
  @operation({
    summary: "Get Egxes",
  })
  @get()
  static getEgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egx",
  })
  @post("{id}")
  static createEgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
