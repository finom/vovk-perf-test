import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gees")
export default class GeeController {
  @operation({
    summary: "Get Gees",
  })
  @get()
  static getGees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gee",
  })
  @post("{id}")
  static createGee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
