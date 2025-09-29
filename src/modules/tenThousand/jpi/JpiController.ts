import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpis")
export default class JpiController {
  @operation({
    summary: "Get Jpis",
  })
  @get()
  static getJpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpi",
  })
  @post("{id}")
  static createJpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
