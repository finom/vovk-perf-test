import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyws")
export default class GywController {
  @operation({
    summary: "Get Gyws",
  })
  @get()
  static getGyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyw",
  })
  @post("{id}")
  static createGyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
