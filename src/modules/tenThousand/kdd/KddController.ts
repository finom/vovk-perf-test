import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdds")
export default class KddController {
  @operation({
    summary: "Get Kdds",
  })
  @get()
  static getKdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdd",
  })
  @post("{id}")
  static createKdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
