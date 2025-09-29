import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etes")
export default class EteController {
  @operation({
    summary: "Get Etes",
  })
  @get()
  static getEtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ete",
  })
  @post("{id}")
  static createEte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
