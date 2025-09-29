import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayhs")
export default class AyhController {
  @operation({
    summary: "Get Ayhs",
  })
  @get()
  static getAyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayh",
  })
  @post("{id}")
  static createAyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
