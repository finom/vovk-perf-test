import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcjs")
export default class GcjController {
  @operation({
    summary: "Get Gcjs",
  })
  @get()
  static getGcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcj",
  })
  @post("{id}")
  static createGcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
