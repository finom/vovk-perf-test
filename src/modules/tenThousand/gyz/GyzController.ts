import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyzs")
export default class GyzController {
  @operation({
    summary: "Get Gyzs",
  })
  @get()
  static getGyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyz",
  })
  @post("{id}")
  static createGyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
