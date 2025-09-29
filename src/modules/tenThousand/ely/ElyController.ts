import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elies")
export default class ElyController {
  @operation({
    summary: "Get Elies",
  })
  @get()
  static getElies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ely",
  })
  @post("{id}")
  static createEly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
