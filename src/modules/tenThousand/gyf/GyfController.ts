import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyfs")
export default class GyfController {
  @operation({
    summary: "Get Gyfs",
  })
  @get()
  static getGyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyf",
  })
  @post("{id}")
  static createGyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
