import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyqs")
export default class GyqController {
  @operation({
    summary: "Get Gyqs",
  })
  @get()
  static getGyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyq",
  })
  @post("{id}")
  static createGyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
