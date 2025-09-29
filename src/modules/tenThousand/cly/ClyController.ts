import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clies")
export default class ClyController {
  @operation({
    summary: "Get Clies",
  })
  @get()
  static getClies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cly",
  })
  @post("{id}")
  static createCly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
