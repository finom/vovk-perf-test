import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjxes")
export default class MjxController {
  @operation({
    summary: "Get Mjxes",
  })
  @get()
  static getMjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjx",
  })
  @post("{id}")
  static createMjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
