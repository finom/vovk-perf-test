import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyhs")
export default class GyhController {
  @operation({
    summary: "Get Gyhs",
  })
  @get()
  static getGyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyh",
  })
  @post("{id}")
  static createGyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
