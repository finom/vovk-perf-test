import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avls")
export default class AvlController {
  @operation({
    summary: "Get Avls",
  })
  @get()
  static getAvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avl",
  })
  @post("{id}")
  static createAvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
