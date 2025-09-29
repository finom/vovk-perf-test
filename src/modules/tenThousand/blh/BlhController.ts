import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blhs")
export default class BlhController {
  @operation({
    summary: "Get Blhs",
  })
  @get()
  static getBlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blh",
  })
  @post("{id}")
  static createBlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
