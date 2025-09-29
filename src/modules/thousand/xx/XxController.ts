import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xxes")
export default class XxController {
  @operation({
    summary: "Get Xxes",
  })
  @get()
  static getXxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xx",
  })
  @post("{id}")
  static createXx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
