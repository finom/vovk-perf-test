import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gszs")
export default class GszController {
  @operation({
    summary: "Get Gszs",
  })
  @get()
  static getGszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsz",
  })
  @post("{id}")
  static createGsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
