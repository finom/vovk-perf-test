import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhus")
export default class HhuController {
  @operation({
    summary: "Get Hhus",
  })
  @get()
  static getHhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhu",
  })
  @post("{id}")
  static createHhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
