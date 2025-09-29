import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flbs")
export default class FlbController {
  @operation({
    summary: "Get Flbs",
  })
  @get()
  static getFlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flb",
  })
  @post("{id}")
  static createFlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
