import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hojs")
export default class HojController {
  @operation({
    summary: "Get Hojs",
  })
  @get()
  static getHojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoj",
  })
  @post("{id}")
  static createHoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
