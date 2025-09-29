import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eies")
export default class EieController {
  @operation({
    summary: "Get Eies",
  })
  @get()
  static getEies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eie",
  })
  @post("{id}")
  static createEie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
