import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hses")
export default class HseController {
  @operation({
    summary: "Get Hses",
  })
  @get()
  static getHses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hse",
  })
  @post("{id}")
  static createHse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
