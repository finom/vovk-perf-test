import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpis")
export default class FpiController {
  @operation({
    summary: "Get Fpis",
  })
  @get()
  static getFpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpi",
  })
  @post("{id}")
  static createFpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
