import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgxes")
export default class KgxController {
  @operation({
    summary: "Get Kgxes",
  })
  @get()
  static getKgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgx",
  })
  @post("{id}")
  static createKgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
