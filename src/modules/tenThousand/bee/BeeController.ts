import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bees")
export default class BeeController {
  @operation({
    summary: "Get Bees",
  })
  @get()
  static getBees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bee",
  })
  @post("{id}")
  static createBee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
