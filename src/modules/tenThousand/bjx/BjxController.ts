import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjxes")
export default class BjxController {
  @operation({
    summary: "Get Bjxes",
  })
  @get()
  static getBjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjx",
  })
  @post("{id}")
  static createBjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
