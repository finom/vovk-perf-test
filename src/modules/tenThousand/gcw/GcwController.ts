import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcws")
export default class GcwController {
  @operation({
    summary: "Get Gcws",
  })
  @get()
  static getGcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcw",
  })
  @post("{id}")
  static createGcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
