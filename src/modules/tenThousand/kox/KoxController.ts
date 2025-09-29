import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("koxen")
export default class KoxController {
  @operation({
    summary: "Get Koxen",
  })
  @get()
  static getKoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kox",
  })
  @post("{id}")
  static createKox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
