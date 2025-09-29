import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hecs")
export default class HecController {
  @operation({
    summary: "Get Hecs",
  })
  @get()
  static getHecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hec",
  })
  @post("{id}")
  static createHec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
