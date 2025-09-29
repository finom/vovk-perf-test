import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elus")
export default class EluController {
  @operation({
    summary: "Get Elus",
  })
  @get()
  static getElus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elu",
  })
  @post("{id}")
  static createElu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
