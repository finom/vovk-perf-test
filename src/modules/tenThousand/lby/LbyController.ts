import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbies")
export default class LbyController {
  @operation({
    summary: "Get Lbies",
  })
  @get()
  static getLbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lby",
  })
  @post("{id}")
  static createLby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
