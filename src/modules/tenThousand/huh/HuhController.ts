import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huhs")
export default class HuhController {
  @operation({
    summary: "Get Huhs",
  })
  @get()
  static getHuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huh",
  })
  @post("{id}")
  static createHuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
