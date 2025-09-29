import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcbs")
export default class GcbController {
  @operation({
    summary: "Get Gcbs",
  })
  @get()
  static getGcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcb",
  })
  @post("{id}")
  static createGcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
