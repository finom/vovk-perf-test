import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvies")
export default class GvyController {
  @operation({
    summary: "Get Gvies",
  })
  @get()
  static getGvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvy",
  })
  @post("{id}")
  static createGvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
