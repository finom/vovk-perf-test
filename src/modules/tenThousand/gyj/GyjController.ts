import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyjs")
export default class GyjController {
  @operation({
    summary: "Get Gyjs",
  })
  @get()
  static getGyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyj",
  })
  @post("{id}")
  static createGyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
