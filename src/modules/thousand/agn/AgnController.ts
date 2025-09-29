import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agns")
export default class AgnController {
  @operation({
    summary: "Get Agns",
  })
  @get()
  static getAgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Agn",
  })
  @post("{id}")
  static createAgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
