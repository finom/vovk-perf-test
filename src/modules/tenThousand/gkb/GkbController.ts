import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkbs")
export default class GkbController {
  @operation({
    summary: "Get Gkbs",
  })
  @get()
  static getGkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkb",
  })
  @post("{id}")
  static createGkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
