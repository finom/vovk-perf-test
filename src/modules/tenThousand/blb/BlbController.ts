import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blbs")
export default class BlbController {
  @operation({
    summary: "Get Blbs",
  })
  @get()
  static getBlbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blb",
  })
  @post("{id}")
  static createBlb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
