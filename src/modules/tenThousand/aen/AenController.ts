import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aens")
export default class AenController {
  @operation({
    summary: "Get Aens",
  })
  @get()
  static getAens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aen",
  })
  @post("{id}")
  static createAen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
