import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bois")
export default class BoiController {
  @operation({
    summary: "Get Bois",
  })
  @get()
  static getBois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Boi",
  })
  @post("{id}")
  static createBoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
