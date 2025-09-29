import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exis")
export default class ExiController {
  @operation({
    summary: "Get Exis",
  })
  @get()
  static getExis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exi",
  })
  @post("{id}")
  static createExi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
