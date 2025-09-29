import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ees")
export default class EesController {
  @operation({
    summary: "Get Ees",
  })
  @get()
  static getEes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ees",
  })
  @post("{id}")
  static createEes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
