import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjxes")
export default class CjxController {
  @operation({
    summary: "Get Cjxes",
  })
  @get()
  static getCjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjx",
  })
  @post("{id}")
  static createCjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
