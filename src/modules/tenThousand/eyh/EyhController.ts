import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyhs")
export default class EyhController {
  @operation({
    summary: "Get Eyhs",
  })
  @get()
  static getEyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyh",
  })
  @post("{id}")
  static createEyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
