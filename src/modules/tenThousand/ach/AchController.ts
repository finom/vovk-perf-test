import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aches")
export default class AchController {
  @operation({
    summary: "Get Aches",
  })
  @get()
  static getAches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ach",
  })
  @post("{id}")
  static createAch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
