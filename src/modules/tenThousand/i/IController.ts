import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("we")
export default class IController {
  @operation({
    summary: "Get WE",
  })
  @get()
  static getWE = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create I",
  })
  @post("{id}")
  static createI = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
