import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eues")
export default class EueController {
  @operation({
    summary: "Get Eues",
  })
  @get()
  static getEues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eue",
  })
  @post("{id}")
  static createEue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
