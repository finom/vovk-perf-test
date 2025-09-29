import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehes")
export default class EheController {
  @operation({
    summary: "Get Ehes",
  })
  @get()
  static getEhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehe",
  })
  @post("{id}")
  static createEhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
