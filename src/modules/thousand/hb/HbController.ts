import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbs")
export default class HbController {
  @operation({
    summary: "Get Hbs",
  })
  @get()
  static getHbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hb",
  })
  @post("{id}")
  static createHb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
