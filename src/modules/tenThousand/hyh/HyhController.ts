import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyhs")
export default class HyhController {
  @operation({
    summary: "Get Hyhs",
  })
  @get()
  static getHyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyh",
  })
  @post("{id}")
  static createHyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
