import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gycs")
export default class GycController {
  @operation({
    summary: "Get Gycs",
  })
  @get()
  static getGycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyc",
  })
  @post("{id}")
  static createGyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
