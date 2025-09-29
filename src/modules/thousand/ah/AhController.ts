import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahs")
export default class AhController {
  @operation({
    summary: "Get Ahs",
  })
  @get()
  static getAhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ah",
  })
  @post("{id}")
  static createAh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
