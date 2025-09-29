import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msus")
export default class MsuController {
  @operation({
    summary: "Get Msus",
  })
  @get()
  static getMsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msu",
  })
  @post("{id}")
  static createMsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
