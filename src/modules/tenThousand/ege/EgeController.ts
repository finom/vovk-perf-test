import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eges")
export default class EgeController {
  @operation({
    summary: "Get Eges",
  })
  @get()
  static getEges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ege",
  })
  @post("{id}")
  static createEge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
