import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egns")
export default class EgnController {
  @operation({
    summary: "Get Egns",
  })
  @get()
  static getEgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egn",
  })
  @post("{id}")
  static createEgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
